import { Link } from "react-router-dom";

function Users() {
  return (
    <>
      <div className="App">
        <section>
          <h2>Users</h2>
          <ul>
            <li>
              <Link to="/users/cVirFz5oVb-CA37EApdul" dideo-checked="true">
                Candace Braun
              </Link>
            </li>
          </ul>
        </section>
      </div>

      <div className="App">
        <section>
          <h2>Candace Braun</h2>
          <ul>
            <li>
              <Link to="/posts/Sq0OZJyMWGrjkJAX7BzU-" dideo-checked="true">
                Those pandas are nothing more than sheeps?
              </Link>
            </li>
          </ul>
        </section>
      </div>

      <div classNameName="App">
        <section>
          <article className="post">
            <h2>Those pandas are nothing more than sheeps?</h2>
            <div>
              <span>by Candace Braun</span>
              <span title="2021-02-06T21:44:01.564Z">
                &nbsp; <i>32 minutes ago</i>
              </span>
            </div>
            <p className="post-content">
              The zeitgeist contends that one cannot separate cranberries from
              gentle deers! The literature would have us believe that an
              energetic apple is not but a scorpion. After a long day at school
              and work, the literature would have us believe that a succinct
              melon is not but a camel. The zeitgeist contends that a mature
              sheep without grapefruits is truly a blackberry of
              self-disciplined ants! The exclusive camel reveals itself as a
              silly squirrel to those who look. A harmonious scorpion without
              squirrels is truly a kangaroo of sincere oranges. The pioneering
              squirrel reveals itself as an affectionate tiger to those who
              look! The confident cherry reveals itself as a unassuming
              blueberry to those who look.
            </p>
            <div>
              <button type="button" className="muted-button reaction-button">
                👍 0
              </button>
              <button type="button" className="muted-button reaction-button">
                🎉 0
              </button>
              <button type="button" className="muted-button reaction-button">
                ❤️ 0
              </button>
              <button type="button" className="muted-button reaction-button">
                🚀 0
              </button>
              <button type="button" className="muted-button reaction-button">
                👀 0
              </button>
            </div>
            <Link
              className="button"
              to="/editPost/Sq0OZJyMWGrjkJAX7BzU-"
              dideo-checked="true"
            >
              Edit Post
            </Link>
          </article>
        </section>
      </div>
      
      <div className="App">
        <section>
          <h2>Edit Post</h2>
          <form>
            <label htmlFor="postTitle">Post Title:</label>
            <input
              type="text"
              id="postTitle"
              name="postTitle"
              placeholder="What's on your mind?"
              value="Those pandas are nothing more than sheeps?"
            />
            <label htmlFor="postContent">Content:</label>
            <textareLink id="postContent" name="postContent">
              The zeitgeist contends that one cannot separate cranberries from
              gentle deers! The literature would have us believe that an
              energetic apple is not but a scorpion. After a long day at school
              and work, the literature would have us believe that a succinct
              melon is not but a camel. The zeitgeist contends that a mature
              sheep without grapefruits is truly a blackberry of
              self-disciplined ants! The exclusive camel reveals itself as a
              silly squirrel to those who look. A harmonious scorpion without
              squirrels is truly a kangaroo of sincere oranges. The pioneering
              squirrel reveals itself as an affectionate tiger to those who
              look! The confident cherry reveals itself as a unassuming
              blueberry to those who look.
            </textareLink>
          </form>
          <button type="button">Save Post</button>
        </section>
      </div>

    </>
  );
}

export default Users;
