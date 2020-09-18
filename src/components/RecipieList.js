import React from 'react';
import './card.css'

import { useStaticQuery, graphql, Link } from 'gatsby';

export default function RecipieList() {
    var data = useStaticQuery(graphql`query{
        allContentfulRecipies(
            sort:{
                fields:createTime,
                order:ASC
            }
        ),{
            edges{
                node{
                    recipieName
                    slug
                    recipieShort
                    recipieMethod {
                       recipieMethod
                      }
                    createTime
                    recipieImage {
                      file {
                        url
                        fileName
                        contentType
                      }
                  	}
                }
            }
        }
    }`)
    return (
        <React.Fragment>
            <h1 className="sect-title">Our Recipies</h1>
        <div className="container-recipies">
            {data.allContentfulRecipies.edges.map((edge) => {
                return (
                    <div key={edge.node.recipieImage.file.url} className="card">
                        <Link to={`/recipies/`+edge.node.slug}>
                        <div className="img-cont">
                        <img src={edge.node.recipieImage.file.url} alt="Avatar" className="card-img"/>
                        </div>
                        </Link>

                    <div className="container">
                      <h4><b>{edge.node.recipieName}</b></h4>
                <p>{edge.node.recipieShort}</p>

                    </div>
                  </div>
                )
                })}
            </div >
            </React.Fragment>

    )
}
