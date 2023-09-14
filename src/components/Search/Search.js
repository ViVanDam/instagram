import { useEffect, useRef, useState } from "react";
// import debounce from "lodash.debounce";
import { LoadingIcon, SearchIcon, XIcon } from "../Icons";
import "./Search.scss";
import img from "../../assets/avata/avt-user.jpg";
import UserInfoBasic from "../UserInfoBasic/UserInfoBasic";

const data = [
  {
    avt: img,
    username: "rouie",
    fullname: "thần môn",
    blueTick: true,
    follow: true,
    follower: "550 nghìn người theo dõi",
    extraInfo: "Đang theo dõi",
  },
  {
    avt: img,
    username: "aoi",
    fullname: "sát thủ hoàng kim",
    blueTick: false,
    follow: false,
    follower: "950 nghìn người theo dõi",
    extraInfo: "Đang theo dõi",
  },
  {
    avt: img,
    username: "kaine",
    fullname: "mồ côi",
    blueTick: true,
    follow: false,
    follower: "350 nghìn người theo dõi",
    extraInfo: "Đang theo dõi",
  },
  {
    avt: img,
    username: "kerra",
    fullname: "tam giác quỷ",
    blueTick: false,
    follow: true,
    follower: "55 người theo dõi",
    extraInfo: "Đang theo dõi",
  },
  {
    avt: img,
    username: "violet",
    fullname: "thứ nguyên vệ thần",
    blueTick: false,
    follow: true,
    follower: "55 triệu người theo dõi",
    extraInfo: "Đang theo dõi",
  },
  {
    avt: img,
    username: "liliana",
    fullname: "nguyệt mị ly",
    blueTick: true,
    follow: true,
    follower: "850 nghìn người theo dõi",
    extraInfo: "Đang theo dõi",
  },
  {
    avt: img,
    username: "elsu",
    fullname: "guitar tình ái",
    blueTick: true,
    follow: true,
    follower: "50 nghìn người theo dõi",
    extraInfo: "Đang theo dõi",
  },
  {
    avt: img,
    username: "nakroth",
    fullname: "lôi quang xứ",
    blueTick: false,
    follow: true,
    follower: "550 người theo dõi",
    extraInfo: "Đang theo dõi",
  },
  {
    avt: img,
    username: "zuka",
    fullname: "gấu nhồi bông",
    blueTick: true,
    follow: true,
    follower: "550 triệu người theo dõi",
    extraInfo: "Đang theo dõi",
  },
  {
    avt: img,
    username: "tulen",
    fullname: "con trai cưng của gà rán",
    blueTick: true,
    follow: false,
    follower: "550 nghìn người theo dõi",
    extraInfo: "Đang theo dõi",
  },
];

function Search() {
  const users = data;
  const [latestSearch, setLastestSearch] = useState([users[0], users[6]]);
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  // const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const searchRef = useRef();

  useEffect(() => {
    const searchInput = document.querySelector(".search-input input");
    const searchInputIcon = document.querySelector(
      ".search-input .search-input-icon"
    );
    searchInput.addEventListener("click", () => {
      searchInputIcon.classList.add("hidden");
    });

    return () => {
      searchInput.removeEventListener("click", () => {
        searchInputIcon.classList.add("hidden");
      });
    };
  });

  useEffect(() => {
    const searchInput = document.querySelector(".search-input input");
    const xBtn = document.querySelector(".search-input .x-btn");
    const searchInputIcon = document.querySelector(
      ".search-input .search-input-icon"
    );
    searchInput.addEventListener("blur", function () {
      searchInputIcon.classList.remove("hidden");
      searchInput.blur();
      if (xBtn) {
        xBtn.classList.remove("show");
      }
    });

    return () => {
      searchInput.addEventListener("blur", function () {
        searchInputIcon.classList.remove("hidden");
        searchInput.blur();
        if (xBtn) {
          xBtn.classList.remove("show");
        }
      });
    };
  });

  const handleSetSearchValue = (e) => {
    setSearchValue(e.target.value);
    // debounce(setValue(searchValue), 1000);
  };

  const handleDeleteSearchValue = () => {
    const searchInputIcon = document.querySelector(
      ".search-input .search-input-icon"
    );
    setSearchValue("");
    searchRef.current.focus();
    searchInputIcon.classList.add("hidden");
  };

  useEffect(() => {
    const handleSearch = async () => {
      setLoading(true);
      setSearchResult([]);
      const getValue = () => {
        setTimeout(() => {
          const results = users.filter((user) => {
            return (
              user.username.includes(searchValue) ||
              user.fullname.includes(searchValue)
            );
          });
          setSearchResult(results);
          setLoading(false);
        }, 2000);
      };

      await getValue();
    };

    if (searchValue !== "") {
      setShowResult(true);
      handleSearch();
    }
  }, [searchValue]);

  const handleDeleteLatestSearchUser = (name) => {
    const newLatestSearch = latestSearch.filter(
      (user) => user.username !== name
    );
    setLastestSearch(newLatestSearch);
  };

  const handleDeleteAllLatestSearchUser = () => {
    setLastestSearch([]);
  };

  return (
    <div className="search-wrapper">
      <div className="search-top">
        <div className="title">
          <h2>Tìm kiếm</h2>
        </div>
        <div className="search-input">
          <div className="search-input-icon">
            <SearchIcon size={16} color={"#8e8e8e"} />
          </div>
          <input
            type="text"
            placeholder="Tìm kiếm"
            value={searchValue}
            onChange={(e) => handleSetSearchValue(e)}
            ref={searchRef}
          />
          {searchValue !== "" && loading === false && (
            <div className="x-btn" onClick={handleDeleteSearchValue}></div>
          )}
          {loading === true && (
            <div className="loading">{loading && <LoadingIcon />}</div>
          )}
        </div>
      </div>
      <div className="search-bottom">
        {searchValue === "" ? (
          <div className="latest-search">
            <div className="top">
              <h4>Gần đây</h4>
              <button onClick={handleDeleteAllLatestSearchUser}>
                Xóa tất cả
              </button>
            </div>
            <div className="bottom">
              {latestSearch.map((it, index) => {
                return (
                  <div key={index} className="latest-search-user">
                    <UserInfoBasic
                      avt={it.avt}
                      username={it.username}
                      fullname={it.fullname}
                      blueTick={it.blueTick}
                      extraFollow={it.extraInfo}
                      direction="horiz"
                      ortherSize={"66px"}
                    />
                    <div
                      className="del-latest-user"
                      onClick={() => handleDeleteLatestSearchUser(it.username)}
                    >
                      <XIcon color={"#737373"} size={16} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          // <></>
          <div className="search-result">
            {showResult === true && loading === false ? (
              <div className="all-result">
                {searchResult.length > 0 ? (
                  searchResult.map((it, index) => {
                    return (
                      <div key={index} className="search-result-user">
                        <UserInfoBasic
                          avt={it.avt}
                          username={it.username}
                          fullname={it.fullname}
                          blueTick={it.blueTick}
                          extraFollow={it.follower}
                          direction="horiz"
                          ortherSize={"66px"}
                        />
                      </div>
                    );
                  })
                ) : (
                  <div className="no-result">
                    <p>không tìm thấy kết quả nào</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="loading">loading...</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
