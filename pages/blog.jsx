/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styled from "styled-components";
import Layout from "../layout";
import { AppRoutes } from "../utils/constants";
// import styled from "styled-components";


export default function About() {
  return (
    <Layout
      title="About"
      content={
        <Container>
          <div className="left_frame">
            <h1>BLOG</h1>
            {Array.from({ length: 4 }, (index) => {
              return (
                <BlogPost>
                  <img src="/assets/about-img.jpeg" alt="" />
                  <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    gravida, massa a vestibulum varius, ex mi finibus dui, at
                    pellentesque nulla lorem a sapien. Suspendisse et justo
                    tortor. Praesent ac bibendum quam, ac blandit tortor. Sed id
                    diam ac odio dignissim fringilla. Nunc nec pellentesque
                    augue. Aenean vel diam pharetra
                  </p>
                  <Link href={AppRoutes.blog}>
                    <button>READ MORE</button>
                  </Link>
                </BlogPost>
              );
            })}
          </div>
          <div className="right_frame">
            <br />
            <b>Recent Post</b>
            <Link href={AppRoutes.blog}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              gravida, massa a vestibulum varius
            </Link>
            <Link href={AppRoutes.blog}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              gravida, massa a vestibulum varius,
            </Link>
            <Link href={AppRoutes.blog}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              gravida, massa a vestibulum varius,
            </Link>
            <Link href={AppRoutes.blog}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              gravida, massa a vestibulum varius,
            </Link>
            <Link href={AppRoutes.blog}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              gravida, massa a vestibulum varius,
            </Link>
          </div>
        </Container>
      }
    />
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  gap: 4rem;

  .left_frame {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .right_frame {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a {
      text-decoration: underline;
    }
  }
`;

const BlogPost = styled.div`
  width: 100%;
  margin: 1rem 0;
  cursor: pointer;

  img {
    width: 100%;
    height: 350px;
    object-fit: fill;
    margin-bottom: 1rem;

    :hover {
      opacity: 0.8;
    }
  }

  h4 {
    text-align: justify;
    font-weight: 400;
    font-size: 1.4rem;
    text-transform: uppercase;
  }
  p {
    text-align: justify;
    font-weight: 300;
    font-size: 1.1rem;
  }

  button {
    background: #000;
    padding: 0.5rem 3rem;
    outline: none;
    border: none;
    cursor: pointer;
    color: #fff;
  }
`;
