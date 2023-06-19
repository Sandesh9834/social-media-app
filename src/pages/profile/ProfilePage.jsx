export function ProfilePage(){
  return(
    <>
      <div className="container">
      <nav className="white-bg">
        <div className="p-s pl-xxl txt-m ml-m">
          <a href="../../index.html">
            <span className="primary-color">My</span>Website
          </a>
        </div>
      </nav>
      <aside className="p-s pt-xl pl-xxl ml-m sidebar1">
        <div className="flex flex-column flex-space-between sidebar">
          <div>
            <div className="pt-s black-color fw-semibold">
              <a href="">
                <i className="bi bi-house"></i> &nbsp;
                <span>Home</span>
              </a>
            </div>
            <div className="pt-s black-color fw-semibold">
              <a href="../explore/explore.html">
                <i className="bi bi-rocket"></i> &nbsp;
                <span>Explore</span>
              </a>
            </div>
            <div className="pt-s black-color fw-semibold">
              <a href="../bookmarks/bookmark.html">
                <i className="bi bi-bookmark"></i> &nbsp;
                <span>Bookmark</span>
              </a>
            </div>
            <div className="pt-s black-color fw-semibold">
              <a href="../profile/profile.html">
                <i className="bi bi-person"></i> &nbsp;
                <span className="fw-bold">Profile</span>
              </a>
            </div>
            <button
              className="mt-m p-s primary-bg white-color border-none outline-transparent new-post-btn"
            >
              Create New Post
            </button>
          </div>
          <div className="flex flex-space-between flex-align-center">
            <div className="flex">
              <div className="grey-bg br-full width-xl height-xl"></div>
              <div className="flex flex-column ml-xs">
                <div className="fw-bold">Tanay Pratap</div>
                <div className="fw-light grey-color">@tanaypratap</div>
              </div>
            </div>
            <div className="grey-color fw-bold">...</div>
          </div>
        </div>
      </aside>
      <main className="p-s">
        <div className="flex flex-column flex-center">
          <div className="lynx-gray-bg width-7 height-7 br-full"></div>
          <h3 className="pt-s">Tanay Pratap</h3>
          <p className="grey-color txt-s">@tanaypratap</p>
          <button className="border lynx-white-bg p-xs m-xs fw-semibold width-8">
            Edit Profile
          </button>
          <p className="m-xs p-xs">
            Senior Software Engineer @Microsoft | Creator of India’s biggest
            programming community | Tweets about JavaScript, ReactJS, Career and
            Startups
          </p>
          <p className="primary-color">tanaypratap.com</p>
          <div className="white-bg p-xs m-xs flex flex-row flex-space-evenly">
            <div className="flex flex-column flex-center m-s ml-m mr-m">
              <p className="fw-black">0</p>
              <p className="fw-semibold">Following</p>
            </div>
            <div className="flex flex-column flex-center m-s ml-m mr-m">
              <p className="fw-black">2K</p>
              <p className="fw-semibold">Posts</p>
            </div>
            <div className="flex flex-column flex-center m-s ml-m mr-m">
              <p className="fw-black">37.3K</p>
              <p className="fw-semibold">Followers</p>
            </div>
          </div>
        </div>
        <h3 className="m-s">Your Posts</h3>
        <div className="white-bg">
          <div className="flex flex-row nowrap p-xs">
            <div className="grey-bg br-full width-xl height-xl p-xs mr-xs"></div>
            <div>
              <div className="flex flex-row flex-align-center flex-space-between">
                <div className="flex flex-row">
                  <p className="fw-semibold">Tanay Pratap</p>
                  <p className="grey-color pl-xs">
                    @tanaypratap <span className="pl-xs">•</span>
                    <span className="pl-xs">1 min</span>
                  </p>
                </div>
                <p>∙∙∙</p>
              </div>
              <p className="pr-s">
                Non programmers on my timeline. Attention. <br />
                <br />
                After placing 100+ programmers i in top Indian startups, I am
                thinking of coming up with a program for business roles as well.
                <br />
                <br />
                Interested in helping me build this course? Join the telegram
                group (in next tweet)
              </p>
              <div
                className="flex flex-row nowrap flex-space-between pt-s pr-s flex-align-center"
              >
                <i className="bi bi-heart"></i>
                <i className="bi bi-chat-left"></i>
                <i className="bi bi-share"></i>
                <i className="bi bi-sliders"></i>
              </div>
            </div>
          </div>
        </div>
      </main>
      <aside className="mt-xl mr-xxl sidebar2">
        <div className="white-bg mb-m pl-s border flex flex-row flex-center nowrap">
          <i className="bi bi-search"></i>
          <input
            type="search"
            name="search-bar"
            className="search-bar border-none outline-transparent p-s width-16"
            placeholder="Search Posts, People, Anything"
          />
        </div>
        <div className="white-bg">
          <div
            className="fw-bold flex flex-row flex-space-between flex-align-center border-bottom p-s"
          >
            <div>Who to Follow?</div>
            <div className="primary-color">Show More</div>
          </div>
          <div className="flex p-s flex-space-between flex-align-center">
            <div className="grey-bg br-full width-xl height-xl"></div>
            <div className="flex flex-column">
              <a href="../profile/profile1.html">
                <div className="fw-bold">Tanay Pratap</div>
                <div className="fw-light grey-color">@tanaypratap</div>
              </a>
            </div>
            <div className="primary-color fw-bold">
              <a href="../profile/profile2.html">
                Follow <i className="bi bi-plus-lg"></i>
              </a>
            </div>
          </div>
          <div className="flex p-s flex-space-between flex-align-center">
            <div className="grey-bg br-full width-xl height-xl"></div>
            <div className="flex flex-column">
              <a href="../profile/profile1.html">
                <div className="fw-bold">Tanay Pratap</div>
                <div className="fw-light grey-color">@tanaypratap</div>
              </a>
            </div>
            <div className="primary-color fw-bold">
              <a href="../profile/profile2.html">
                Follow <i className="bi bi-plus-lg"></i>
              </a>
            </div>
          </div>
          <div className="flex p-s flex-space-between flex-align-center">
            <div className="grey-bg br-full width-xl height-xl"></div>
            <div className="flex flex-column">
              <a href="../profile/profile1.html">
                <div className="fw-bold">Tanay Pratap</div>
                <div className="fw-light grey-color">@tanaypratap</div>
              </a>
            </div>
            <div className="primary-color fw-bold">
              <a href="../profile/profile2.html">
                Follow <i className="bi bi-plus-lg"></i>
              </a>
            </div>
          </div>
          <div className="flex p-s flex-space-between flex-align-center">
            <div className="grey-bg br-full width-xl height-xl"></div>
            <div className="flex flex-column">
              <a href="../profile/profile1.html">
                <div className="fw-bold">Tanay Pratap</div>
                <div className="fw-light grey-color">@tanaypratap</div>
              </a>
            </div>
            <div className="primary-color fw-bold">
              <a href="../profile/profile2.html">
                Follow <i className="bi bi-plus-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </aside>
    </div>
    </>
  )
}