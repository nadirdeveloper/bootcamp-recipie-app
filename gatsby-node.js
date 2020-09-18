const path = require('path');

module.exports.createPages = async({graphql,actions})=>{
    const {createPage} = actions;
    const recipieTemplate =  path.resolve("./src/templates/recipies.js");
    const res = await graphql(`
    query{
        allContentfulRecipies{
            edges{
                node{
                    slug
                }
            }
        }
    }
    `)
    res.data.allContentfulRecipies.edges.forEach((edges)=>{
        createPage({
            component:recipieTemplate,
            path:`/recipies/${edges.node.slug}`,
            context:{
                slug: edges.node.slug
            }
        })
})
}