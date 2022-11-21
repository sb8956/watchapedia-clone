import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const Similar = ({ similar }) => {
    const SimilarBlock = styled.div`
    margin-bottom: 2rem;
        img{
            width: 8rem;
            height: 12rem;
            border-radius: 0.5rem;
        }
        .similarTitle{
            width: 8rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: bold;
        }
        .similarAvg{
            font-size: 0.85rem;
            color: #787878;
            font-weight: 500;
        }
        .similarCategory{
            font-size: 0.8rem;
            color: #B5B5B5;
            font-weight: 500;
        }

    `

    return (
        <SimilarBlock>
            <Link to={"/content/" + similar.id}
                state={{
                    category: similar.title ? 'movie' : 'tv',
                    id: similar.id
                }}><img src={IMAGE_URL + similar.poster_path} alt={similar.title || similar.name}></img>
            </Link>
            <div className='similarTitle'>{similar.title || similar.name}</div>
            <div className='similarAvg'>평균 ★ {similar.vote_average}</div>
            <div className='similarCategory'>{similar.title ? '영화' : 'TV 프로그램'}</div>
        </SimilarBlock>
    );
};

export default Similar;