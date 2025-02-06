import Link from "next/link";
import PageBanner from "../../src/components/PageBanner";
import Skyline from "../../src/components/Skyline";
import Layout from "../../src/layout/Layout";
import React from "react";
export async function getStaticPaths() {
  // Return a list of possible value for id

  const graphqlEndpoint = process.env.NEXT_PUBLIC_API_URL;
  const slugs = await fetch(graphqlEndpoint, {
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
                      slug
                    }
                  }
              }
            `
    })
  }).then((response) => response.json());

  const paths = slugs.data.Blogs.docs.map((slug) => ({
    params: { slug: slug.slug }
  }));

  return {
    paths,
    fallback: true
  };
}

const getAllPostData = async (slug) => {
  const graphqlEndpoint = process.env.NEXT_PUBLIC_API_URL;
  const data = await fetch(graphqlEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br',
      'X-Auth-Token': `dsdsdsds`
    },
    body: JSON.stringify({
      query: `
            query Blogs($slug: String!) {
                Blogs(limit: 1, where: { slug: { equals: $slug } }) {
                  docs {
                    title
                    featuredPost
                    featuredImage {
                      alt
                      url
                    }
                    readTime
                    createdAt
                    slug
                    excerpt
                    blogcategory {
                      name
                      value
                    }
                    content_html
                  }
                }
              }
            `,
      variables: {
        slug: slug
      }
    })
  }).then((response) => response.json());
  return data.data.Blogs.docs[0];
};


export async function getStaticProps({ params }) {
  const slug = params.slug;
  const postData = await getAllPostData(slug);
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

  const blogslist = await fetch(graphqlEndpoint, {
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
      postData,
      blogCategories: blogCategories.data.Blogcategories.docs ?? [],
      blogslist: blogslist.data.Blogs.docs ?? []
    }
  };
}

const BlogDetails = ({
  postData,
  blogCategories,
  blogslist
}) => {
  const [navigationPosts, setNavigationPosts] = React.useState({ prev: null, next: null });
  React.useEffect(() => {
    if (blogslist && postData?.slug) {
      const currentIndex = blogslist.findIndex((blog) => blog.slug === postData.slug);
      const prevPost = currentIndex > 0 ? blogslist[currentIndex - 1] : blogslist.length > 1 ? blogslist[blogslist.length - 1] : null;
      const nextPost = currentIndex < blogslist.length - 1 ? blogslist[currentIndex + 1] : blogslist.length > 1 ? blogslist[0] : null;
      setNavigationPosts({ prev: prevPost, next: nextPost });
    }
  }, [blogslist, postData?.slug]);

  return (
    <Layout>
      <PageBanner pageName="Article" title={postData?.blogcategory?.name} />
      <section className="blog-details-section pt-130 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="blog-details-wrapper">
                <div className="blog-post mb-60 wow fadeInUp">
                  <div className="post-thumbnail">
                    <img
                      className="max-h-[400px] object-cover w-full"
                      src={postData?.featuredImage?.url}
                      alt={postData?.featuredImage?.alt}
                    />
                    <span className="post-date">
                      <a href="#">
                        {navigationPosts.prev?.createdAt
                          ? new Date(navigationPosts.prev.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })
                          : ''}
                      </a>
                    </span>
                  </div>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span className="cat-btn">
                          <Link legacyBehavior href={`/blogs?category=${postData?.blogcategory?.value}`}>
                            <a>{postData?.blogcategory?.name}</a>
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
                  <div className="main-post">
                    <div className="entry-content">
                      <h3 className="title">{postData?.title}</h3>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: postData?.content_html,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="entry-footer">
                    <div className="social-share">
                      <h4>Share News :</h4>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="post-navigation-item mb-30 wow fadeInUp">
                  <div className="prev-post post-nav-item d-flex mb-30">
                    <div className="thumb">
                      <img src={navigationPosts.prev?.featuredImage?.url} alt={navigationPosts.prev?.featuredImage?.alt} />
                      <div className="overlay">
                        <i className="far fa-angle-left" />
                      </div>
                    </div>
                    <div className="content">
                      <span className="post-date">
                        <a href="#">
                          <i className="far fa-calendar-alt" />
                          {navigationPosts.prev?.createdAt
                            ? new Date(navigationPosts.prev.createdAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })
                            : ''}
                        </a>
                      </span>
                      <h6>
                        <Link legacyBehavior href={`/blogs/${navigationPosts.prev?.slug}`}>
                          <a>{navigationPosts?.prev?.title}</a>
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="next-post post-nav-item d-flex mb-30">
                    <div className="thumb">
                      <img src={navigationPosts.next?.featuredImage?.url} alt={navigationPosts.next?.featuredImage?.alt} />
                      <div className="overlay">
                        <i className="far fa-angle-right" />
                      </div>
                    </div>
                    <div className="content">
                      <span className="post-date">
                        <a href="#">
                          <i className="far fa-calendar-alt" />
                          {navigationPosts.next?.createdAt
                            ? new Date(navigationPosts.next.createdAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })
                            : ''}
                        </a>
                      </span>
                      <h6>
                        <Link legacyBehavior href={`/blogs/${navigationPosts.next?.slug}`}>
                          <a>{navigationPosts.next?.title}</a>
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 order-lg-2 order-1">
              <div className="sidebar-widget-area">
                {/*=== Category Widget ===*/}
                <div className="sidebar-widget category-widget mb-10 wow fadeInUp">
                  <h4 className="widget-title">Category</h4>
                  <ul className="category-nav">
                    {blogCategories?.map((category, index) => (
                      <li key={index}>
                        <Link legacyBehavior href={`/blogs?category=${category?.value}`}>
                          <a>{category?.name}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/*=== Recent Post Widget ===*/}
                <div className="sidebar-widget recent-post-widget mb-10 wow fadeInUp">
                  <h4 className="widget-title">Featured Posts</h4>
                  <ul className="recent-post-list">
                    {blogslist
                      ?.filter((item) => item.featuredPost)
                      .map((post, index) => (
                        <li className="post-thumbnail-content" key={post.title}>
                          <img src={post.featuredImage?.url} alt={post.featuredImage?.alt} />
                          <div className="post-title-date">
                            <h5>
                              <Link legacyBehavior href={`/blogs/${post.slug}`}>
                                <a>{post.title}</a>
                              </Link>
                            </h5>
                            <span className="posted-on">
                              <i className="far fa-calendar-alt" />
                              {new Date(post.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                              })}
                            </span>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
                {/*=== Contact Info Widget ===*/}
                <div
                  className="sidebar-widget contact-info-widget mb-40 border-0 p-0 bg_cover wow fadeInUp"
                  style={{
                    backgroundImage: "url(https://vanshaghar.s3.me-central-1.amazonaws.com/payload/vansha-ghar-items.jpeg)",
                  }}
                >
                  <div className="contact-info-content">
                    <h3 className="title">Need Quality and fresh Foods</h3>
                    <p>We are committed to providing you with the freshest and highest quality food.</p>
                    <a href="/contact" className="main-btn btn-white">
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
    </Layout>
  );
};
export default BlogDetails;
