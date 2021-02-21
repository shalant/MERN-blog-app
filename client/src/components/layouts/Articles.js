import React from 'react';
import styled from 'styled-components';
import spinner from '../../spinner.gif';
import {Link} from 'react-router-dom';

function Articles({posts}) {
    return (

        <MainContainer>
            {!posts.length ? (
                <img src={spinner} alt='loading...' />
            ) : (
            posts.map((article, key) => (
                <div className='container' key={key} >
                    <Link to={{
                        pathname: `/article/${article._id}`
                    }}>
                    
                    </Link>
                    <h2>{article.title}</h2>
                    <p>{article.article}</p>
                    <span className='badge badge-secondary p-2'>
                        {article.authorname}
                    </span>
                    <div className='row my-5'>
                        <div className='col-sm-2'>
                            <Link to='/edit-article' className='btn btn-outline-success'>
                                Edit Article
                            </Link>
                        </div>
                        <div className='col-sm-2'>
                            <a to='/' className='btn btn-outline-danger'>
                                Delete Article
                            </a>
                        </div>
                    </div>
                </div>
            )))}
        </MainContainer>
    )
}

export default Articles

//main container

const MainContainer = styled.div`
    margin: 7rem 0;

    img {
        width: 10rem;
        display: block;
        margin: 0 auto;
    }
`;