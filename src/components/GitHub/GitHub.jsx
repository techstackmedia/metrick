import { useEffect, useState } from 'react';
import github from './GitHub.module.css';
import Pagination from '@mui/material/Pagination';

const GitHub = () => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);

  const handleClick = (event, value) => {
    return setPage(value);
  };

  const baseURL = `https://api.github.com/search/repositories?q=created:%3E2021-08-13&sort=stars&order=desc&page=${page}`;

  useEffect(() => {
    requestRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  async function requestRepos() {
    const res = await fetch(baseURL);
    const json = await res.json();
    if (res.ok) {
      setPosts(json.items);
    } else {
      throw res;
    }
  }

  const elem = posts.map((post) => {
    const day = () => {
      let date = new Date(post.updated_at).getTime();
      let d = new Date(date).getDay();
      if (d === 0) {
        return `${Math.abs(
          new Date().getHours() - new Date(date).getHours()
        )} hours ${Math.abs(
          new Date().getMinutes() - new Date(date).getMinutes()
        )} minutes ago`;
      } else {
        return `${d} days ago`;
      }
    };

    return (
      <>
        <section className={github.github}>
          <div key={post.id}>
            <img
              src={post.owner.avatar_url}
              width={200}
              height={200}
              alt={`${post.owner.login} avatar`}
            />
          </div>
          <div className={github.profile}>
            <h2>{post.name.toUpperCase()}</h2>
            <p>
              {post.description}{' '}
              <a href={post.html_url} target="_blank" rel="noreferrer">
                {post.login}
              </a>
            </p>
            <div className={github.footer}>
              <div className={github.stars}>Stars: {post.stargazers_count}</div>
              <div className={github.issues}>
                Issues: {post.open_issues_count}
              </div>
              <p className={github.submitted}>
                Submitted {day()} by {post.name}
              </p>
            </div>
          </div>
        </section>
      </>
    );
  });

  return (
    <>
      <h1 className={github.title}>Trending Repos</h1>
      {elem}
      {
        <div className={github.pagination}>
          <Pagination
            count={34}
            page={page}
            onChange={handleClick}
            color="primary"
          />
        </div>
      }
    </>
  );
};

export default GitHub;
