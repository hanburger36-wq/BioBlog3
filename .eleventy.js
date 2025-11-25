module.exports = function(eleventyConfig) {
    
    // 1. 设置文件复制规则：将 style.css 和 assets 文件夹原样复制到 _site 文件夹
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("assets");

    // 2. 告诉 Eleventy 您的文章在哪里（创建一个名为 'posts' 的集合）
    eleventyConfig.addCollection("posts", function(collection) {
        return collection.getFilteredByGlob("posts/*.md");
    });

    // 3. 配置模板引擎和布局路径
    return {
        dir: {
            // 所有布局文件（如 blog_template.html）都在 _includes 文件夹里
            includes: "_includes" 
        },
        // 告诉 Eleventy 默认所有 Markdown 文件都应该使用 'blog_template.html' 框架
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "html",
        dataTemplateEngine: "njk",
        layout: "blog_template.njk" 
    };
};