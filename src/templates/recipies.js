import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout";
export const query = graphql`
query($slug: String!){
    contentfulRecipies(slug:{eq:$slug}){
        recipieName
        recipieShort
        recipieImage {
          id
        file {
          url
          fileName
          contentType
        }
        }
    recipieMethod {
      id
     recipieMethod
    }    
    }
}
`
export default function Recipie(props) {

    return (
        <Layout>
            <div className="recipie">
                <img src={props.data.contentfulRecipies.recipieImage.file.url} alt="" className="recipie-img" />
                <h1>Recipie Of {props.data.contentfulRecipies.recipieName}</h1>
                <div className="recipie-content">
                    <h3>A Short Description of Recipie</h3>
                    <p className="recipie-descript">{props.data.contentfulRecipies.recipieShort}</p>
    <h3>Instruction of Making {props.data.contentfulRecipies.recipieName}</h3>
    {/* <p className="recipie-descript">{props.data.contentfulRecipies.recipieMethod.recipieMethod}</p> */}
        <div className="recipie-descript" dangerouslySetInnerHTML={{__html:props.data.contentfulRecipies.recipieMethod.recipieMethod}}></div>
                </div>
            </div>
        </Layout>

    )
}
