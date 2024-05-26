import Link from "next/link";
import PageBanner from "../../src/components/PageBanner";
import Skyline from "../../src/components/Skyline";
import Layout from "../../src/layout/Layout";
import React from "react";

export async function getStaticProps() {

  const graphqlEndpoint = process.env.NEXT_PUBLIC_API_URL;

  const blogCategories = await fetch(graphqlEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br',
      'X-Auth-Token': `dsdsdsds`
    },
    body: JSON.stringify({
      query: `
          query {
            Blogcategories(limit: 100) {
              docs {
               name
              value
              }
            }
          }
        `
    })
  }).then((response) => response.json());
  const blogs = await fetch(graphqlEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br',
      'X-Auth-Token': `dsdsdsds`
    },
    body: JSON.stringify({
      query: `
          query {
            Blogs(limit: 100) {
              docs {
               title
                featuredPost
                featuredImage{
                  alt
                  url
                }
                readTime
                createdAt
                slug
                excerpt
                blogcategory{
                  name
                  value
                }
              }
            }
          }
        `
    })
  }).then((response) => response.json());



  return {
    props: {
      blogCategories: blogCategories?.data?.Blogcategories?.docs ?? [], blogs: blogs?.data?.Blogs?.docs ?? []
    },
  };
}



const BlogStandard = ({
  blogCategories,
  blogs,
}) => {

  return (
    <Layout>
      <PageBanner pageName={"Blogs & Events"} title="Blog & Events" />
      <section className="blog-standard-section pt-130 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7 order-lg-1 order-2">
              <div className="blog-standard-wrapper mb-30">
                {
                  blogs.map((blog, index) => (
                    <div className="blog-item-two mb-50 wow fadeInUp"
                      key={blog.slug}
                    >
                      <div className="post-thumbnail">
                        <img
                          className="max-h-[400px] object-cover"
                          src={blog?.featuredImage?.url}
                          alt={blog?.featuredImage?.alt} />
                        <span className="post-date">
                          <a href="#">
                            {new Date(blog.createdAt).getDay() + 1}
                            <span>
                              {new Intl.DateTimeFormat('en-US', { month: 'short' }).format(new Date(blog?.createdAt))}
                            </span>
                          </a>
                        </span>
                      </div>
                      <div className="entry-content">
                        <div className="post-meta">
                          <ul>
                            <li>
                              <span className="cat-btn">
                                <Link legacyBehavior href={`/blogs?category=${blog?.blogcategory?.value}`}>
                                  <a>{blog?.blogcategory?.name}</a>
                                </Link>
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="far fa-user" />
                                Vansha Ghar
                              </span>
                            </li>
                          </ul>
                        </div>
                        <h3 className="title uppercase">
                          <Link legacyBehavior href={`/blogs/${blog.slug}`}>
                            <a>
                              {blog.title}
                            </a>
                          </Link>
                        </h3>
                        <p className="line-clamp-3">
                          {blog.excerpt}
                        </p>
                        <Link legacyBehavior href={`/blogs/${blog.slug}`}>
                          <a className="main-btn filled-btn">
                            Read More
                          </a>
                        </Link>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 order-lg-2 order-1">
              <div className="sidebar-widget-area">
                {/*=== Category Widget ===*/}
                <div className="sidebar-widget category-widget mb-10 wow fadeInUp">
                  <h4 className="widget-title">Category</h4>
                  <ul className="category-nav">
                    {
                      blogCategories.map((category, index) => (
                        <li key={index}>
                          <Link legacyBehavior href={`/blogs?category=${category.value}`}>
                            <a>{category.name}</a>
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
                {/*=== Recent Post Widget ===*/}
                <div className="sidebar-widget recent-post-widget mb-10 wow fadeInUp">
                  <h4 className="widget-title">Featured Posts</h4>
                  <ul className="recent-post-list">
                    {
                      blogs.filter(item => item.featuredPost).map((post, index) => (
                        <li className="post-thumbnail-content"
                          key={post.title}
                        >
                          <img
                            src={post.featuredImage.url}
                            alt={post.featuredImage.alt}
                          />
                          <div className="post-title-date">
                            <h5>
                              <Link legacyBehavior href={`/blogs/${post.slug}`}>
                                <a>
                                  {post.title}
                                </a>
                              </Link>
                            </h5>
                            <span className="posted-on">
                              <i className="far fa-calendar-alt" />
                              {new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                            </span>
                          </div>
                        </li>))
                    }
                  </ul>
                </div>
                {/*=== Contact Info Widget ===*/}
                <div
                  className="sidebar-widget contact-info-widget mb-40 border-0 p-0 bg_cover wow fadeInUp"
                  style={{
                    backgroundImage:
                      "url(assets/images/blog/contact-info-bg.jpg)",
                  }}
                >
                  <div className="contact-info-content">
                    <h3 className="title">Need Quality and fresh Foods</h3>
                    <p>
                      Sit amet consectetur adipiscing elit proin pretium cursus
                      lectus
                    </p>
                    <a href="#" className="main-btn btn-white">
                      Contact us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Skyline />
    </Layout >
  );
};
export default BlogStandard;
