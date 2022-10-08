import React from "react";
import "./style.css";

function SideBar() {
  const toggleSidebar = () => {
    const sidebar            = document.getElementById("sidebar");
    const iconBtnHideSidebar = document.getElementById("icon__hide-sidebar");
    sidebar.classList.toggle("sidebar-toggle");
    iconBtnHideSidebar.classList.toggle("rotated");
  };

  return (
    <>
      <div className="container w-1/4 h-screen flex relative">
        <div id="sidebar" className="sidebar scrollbar-hide relative">
          <div className="sidebar__content">
            <div className="sidebar__search-box w-full h-12 flex py-2 px-3 border border-[#dddddd] rounded-md items-center">
              <i className="fa-solid fa-bars text-[#508ff4]"></i>
              <input
                type="text"
                className="h-full w-full flex-1 pl-5 outline-none"
                value="Tòa nhà A"
              />

              <button className="border-r border-[#9e9e9e] pr-3 text-[#9e9e9e] hover:text-[#508ff4]">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
              <button className="pl-4 pr-2 text-[#9e9e9e] hover:text-[#508ff4]">
                <i class="fa fa-xmark text-lg"></i>
              </button>
            </div>
            <div className="w-full mt-1 border">
              <img
                src="./assets/img/image-location.png"
                alt="Image location"
                className="rounded-t-sm w-full h-60"
              />
              <div className="w-full mt-1 p-3">
                <p className="font-bold text-lg text-[#212121]">Tòa nhà A</p>
                <p className="text-xs text-[#828282]">Địa điểm</p>
              </div>
            </div>
            <div className="sidebar__btn-perform flex items-center justify-evenly border py-3">
              <div className="w-1/4 flex flex-col items-center justify-center">
                <button className="w-8 h-8 rounded-full bg-[#508ff4] hover:brightness-105">
                  <i class="fa-solid fa-diamond-turn-right text-white"></i>
                </button>
                <p className="text-[#508ff4] text-xs mt-1">Chỉ đường</p>
              </div>
              <div className="w-1/4 flex flex-col items-center justify-center">
                <button className="w-8 h-8 rounded-full border border-[#508ff4] hover:bg-[#f1f6ff]">
                  <i class="fa-solid fa-qrcode text-[#508ff4]"></i>
                </button>
                <p className="text-[#508ff4] text-xs mt-1">Mã địa chỉ</p>
              </div>
              <div className="w-1/4 flex flex-col items-center justify-center">
                <button className="w-8 h-8 rounded-full border border-[#508ff4] hover:bg-[#f1f6ff]">
                  <i class="fa-solid fa-share-nodes text-[#508ff4]"></i>
                </button>
                <p className="text-[#508ff4] text-xs mt-1">Chia sẻ</p>
              </div>
            </div>
            <div className="w-full px-3 flex flex-col border">
              <div className="location w-full py-2">
                <div className="location__icon">
                  <i class="fa-solid fa-location-dot text-[#508ff4]"></i>
                </div>
                <div className="location__info">
                  <p className="text-xs text-[#212121]">
                    63 Phan Đăng Lưu, Phường Thạch Thang, Quận Hải Châu, Thành
                    Phố Đà Nẵng
                  </p>
                </div>
              </div>
              <div className="location w-full py-2">
                <div className="location__icon">
                  <i class="fa-solid fa-clock text-[#508ff4]"></i>
                </div>
                <div className="location__info">
                  <p className="text-xs text-[#212121]">
                    <span className="font-bold mr-2">Ngày bắt đầu: </span>
                    06/10/2022
                  </p>
                </div>
              </div>
              <div className="location w-full py-2">
                <div className="location__icon">
                  <i class="fa-solid fa-clock text-[#508ff4]"></i>
                </div>
                <div className="location__info">
                  <p className="text-xs text-[#212121]">
                    <span className="font-bold mr-2">Ngày kết thúc: </span>
                    13/10/2022
                  </p>
                </div>
              </div>
              <div className="sidebar__btn-proposal w-full py-3 flex">
                <button className="w-2/3 border p-2 rounded-full text-sm shadow-sm m-auto hover:bg-[#f9f9f9]">
                  <i class="fa-solid fa-pencil text-[#508ff4] mr-2"></i>
                  Đề xuất chỉnh sửa
                </button>
              </div>
            </div>
            <div className="w-full border">
              <div className="location w-full py-4 px-2 border-b">
                <div className="location__image w-1/5 px-1">
                  <img
                    src="./assets/img/image-notfound.png"
                    alt="Image not found"
                    className="rounded-t-sm h-14"
                  />
                </div>
                <div className="location__info pl-1">
                  <p className="font-medium text-xs">
                    Công Ty Cổ Phần Đầu Tư Và Phát Triển Đô Thị Vạn Thịnh Phát
                  </p>
                  <p className="text-xs break-all mt-1">
                    Số 63 Lê Thanh Nghị, Phường Hòa Cường Bắc, Quận Hải Châu,
                    Thành Phố Đà Nẵng, Việt Nam
                  </p>
                </div>
              </div>
              <div className="location w-full py-4 px-2 border-b">
                <div className="location__image w-1/5 px-1">
                  <img
                    src="./assets/img/image-notfound.png"
                    alt="Image not found"
                    className="rounded-t-sm h-14"
                  />
                </div>
                <div className="location__info pl-1">
                  <p className="font-medium text-xs">
                    Nam Long Telecom Da Nang
                  </p>
                  <p className="text-xs break-all mt-1">
                    Số 63 Lê Thanh Nghị, Phường Hòa Cường Bắc, Quận Hải Châu,
                    Thành Phố Đà Nẵng, Việt Nam
                  </p>
                </div>
              </div>
              <div className="location w-full py-4 px-2 border-b">
                <div className="location__image w-1/5 px-1">
                  <img
                    src="./assets/img/image-notfound.png"
                    alt="Image not found"
                    className="rounded-t-sm h-14"
                  />
                </div>
                <div className="location__info pl-1">
                  <p className="font-medium text-xs">Công ty A</p>
                  <p className="text-xs break-all mt-1">
                    Số 63 Lê Thanh Nghị, Phường Hòa Cường Bắc, Quận Hải Châu,
                    Thành Phố Đà Nẵng, Việt Nam
                  </p>
                </div>
              </div>
              <div className="location w-full py-4 px-2 border-b">
                <div className="location__image w-1/5 px-1">
                  <img
                    src="./assets/img/image-notfound.png"
                    alt="Image not found"
                    className="rounded-t-sm h-14"
                  />
                </div>
                <div className="location__info pl-1">
                  <p className="font-medium text-xs">Công ty B</p>
                  <p className="text-xs break-all mt-1">
                    Số 63 Lê Thanh Nghị, Phường Hòa Cường Bắc, Quận Hải Châu,
                    Thành Phố Đà Nẵng, Việt Nam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative top-1 ml-0.5 h-fit btn__hide-sidebar">
          <button
            id="btn__hide-sidebar"
            className="bg-white hover:bg-[#f9f9f9] h-12 w-5 rounded-sm outline-none"
            onClick={toggleSidebar}
          >
            <i
              id="icon__hide-sidebar"
              class="fa-solid fa-caret-left text-[#9e9e9e]"
            ></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default SideBar;
