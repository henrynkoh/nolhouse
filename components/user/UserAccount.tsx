"use client";

import React, { useState } from "react";

type TabType = "profile" | "bookings" | "reviews" | "wishlist";

interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  profileImage?: string;
}

interface Booking {
  id: string;
  accommodationName: string;
  accommodationImage: string;
  checkInDate: string;
  checkOutDate: string;
  status: "upcoming" | "completed" | "cancelled";
  totalPrice: number;
}

interface Review {
  id: string;
  accommodationName: string;
  accommodationImage: string;
  rating: number;
  comment: string;
  date: string;
}

interface WishlistItem {
  id: string;
  name: string;
  imageUrl: string;
  location: string;
  price: number;
}

interface UserAccountProps {
  userProfile: UserProfile;
  bookings: Booking[];
  reviews: Review[];
  wishlist: WishlistItem[];
}

export const UserAccount: React.FC<UserAccountProps> = ({
  userProfile,
  bookings,
  reviews,
  wishlist,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(userProfile);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('ko-KR', options);
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would call an API to update the profile
    setIsEditing(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                {profile.profileImage ? (
                  <img 
                    src={profile.profileImage} 
                    alt={`${profile.firstName} ${profile.lastName}`} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                )}
              </div>
              <div>
                <h2 className="text-xl font-bold">{profile.firstName} {profile.lastName}</h2>
                <p className="text-gray-600">{profile.email}</p>
              </div>
            </div>

            <nav>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`w-full text-left px-4 py-2 rounded-md ${activeTab === "profile" ? "bg-blue-50 text-blue-600" : "hover:bg-gray-50"}`}
                  >
                    프로필 설정
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("bookings")}
                    className={`w-full text-left px-4 py-2 rounded-md ${activeTab === "bookings" ? "bg-blue-50 text-blue-600" : "hover:bg-gray-50"}`}
                  >
                    예약 내역
                    <span className="ml-2 bg-gray-100 text-gray-700 text-xs font-medium px-2 py-0.5 rounded">
                      {bookings.filter(b => b.status === "upcoming").length}
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("reviews")}
                    className={`w-full text-left px-4 py-2 rounded-md ${activeTab === "reviews" ? "bg-blue-50 text-blue-600" : "hover:bg-gray-50"}`}
                  >
                    나의 후기
                    <span className="ml-2 bg-gray-100 text-gray-700 text-xs font-medium px-2 py-0.5 rounded">
                      {reviews.length}
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab("wishlist")}
                    className={`w-full text-left px-4 py-2 rounded-md ${activeTab === "wishlist" ? "bg-blue-50 text-blue-600" : "hover:bg-gray-50"}`}
                  >
                    위시리스트
                    <span className="ml-2 bg-gray-100 text-gray-700 text-xs font-medium px-2 py-0.5 rounded">
                      {wishlist.length}
                    </span>
                  </button>
                </li>
              </ul>
            </nav>

            <div className="mt-8 pt-6 border-t">
              <button className="w-full px-4 py-2 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors">
                로그아웃
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:w-3/4">
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">프로필 설정</h2>
                {!isEditing && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors"
                  >
                    수정하기
                  </button>
                )}
              </div>

              <form onSubmit={handleProfileSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      이름
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={profile.firstName}
                      onChange={handleProfileChange}
                      disabled={!isEditing}
                      className={`block w-full rounded-md py-2 px-3 ${
                        isEditing 
                          ? "bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                          : "bg-gray-50 border-gray-200"
                      }`}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      성
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={profile.lastName}
                      onChange={handleProfileChange}
                      disabled={!isEditing}
                      className={`block w-full rounded-md py-2 px-3 ${
                        isEditing 
                          ? "bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                          : "bg-gray-50 border-gray-200"
                      }`}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={profile.email}
                    onChange={handleProfileChange}
                    disabled={!isEditing}
                    className={`block w-full rounded-md py-2 px-3 ${
                      isEditing 
                        ? "bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                        : "bg-gray-50 border-gray-200"
                    }`}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    전화번호
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={profile.phone}
                    onChange={handleProfileChange}
                    disabled={!isEditing}
                    className={`block w-full rounded-md py-2 px-3 ${
                      isEditing 
                        ? "bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                        : "bg-gray-50 border-gray-200"
                    }`}
                  />
                </div>

                {isEditing && (
                  <div className="flex justify-end gap-4">
                    <button
                      type="button"
                      onClick={() => {
                        setProfile(userProfile);
                        setIsEditing(false);
                      }}
                      className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      취소
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      저장하기
                    </button>
                  </div>
                )}
              </form>
            </div>
          )}

          {/* Bookings Tab */}
          {activeTab === "bookings" && (
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <h2 className="text-2xl font-bold mb-6">예약 내역</h2>

              <div className="flex border-b mb-6">
                <button
                  className={`px-4 py-2 font-medium ${
                    true ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  전체
                </button>
                <button
                  className={`px-4 py-2 font-medium ${
                    false ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  예정된 예약
                </button>
                <button
                  className={`px-4 py-2 font-medium ${
                    false ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  이용 완료
                </button>
                <button
                  className={`px-4 py-2 font-medium ${
                    false ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  취소됨
                </button>
              </div>

              {bookings.length > 0 ? (
                <div className="space-y-6">
                  {bookings.map(booking => (
                    <div key={booking.id} className="border rounded-lg overflow-hidden">
                      <div className={`p-2 text-sm font-medium text-white ${
                        booking.status === "upcoming" ? "bg-blue-600" : 
                        booking.status === "completed" ? "bg-green-600" : "bg-red-600"
                      }`}>
                        {booking.status === "upcoming" ? "예정된 예약" : 
                         booking.status === "completed" ? "이용 완료" : "취소됨"}
                      </div>
                      <div className="p-4 flex flex-col md:flex-row gap-4">
                        <div className="md:w-1/4 relative">
                          <img 
                            src={booking.accommodationImage} 
                            alt={booking.accommodationName} 
                            className="w-full h-32 object-cover rounded-md"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-1">{booking.accommodationName}</h3>
                          <div className="mb-2">
                            <span className="text-gray-600">
                              {formatDate(booking.checkInDate)} - {formatDate(booking.checkOutDate)}
                            </span>
                          </div>
                          <div className="flex justify-between items-end">
                            <div>
                              <span className="text-sm text-gray-500">총 결제 금액</span>
                              <p className="font-bold">{booking.totalPrice.toLocaleString()}원</p>
                            </div>
                            <div className="space-x-2">
                              {booking.status === "upcoming" && (
                                <>
                                  <button className="px-4 py-2 bg-white border border-red-600 text-red-600 rounded-md hover:bg-red-50 transition-colors">
                                    예약 취소
                                  </button>
                                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                                    예약 확인
                                  </button>
                                </>
                              )}
                              {booking.status === "completed" && (
                                <button className="px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                                  후기 작성
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-lg text-gray-500">예약 내역이 없습니다.</p>
                </div>
              )}
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === "reviews" && (
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <h2 className="text-2xl font-bold mb-6">나의 후기</h2>
              
              {reviews.length > 0 ? (
                <div className="space-y-6">
                  {reviews.map(review => (
                    <div key={review.id} className="border rounded-lg p-4">
                      <div className="flex items-start gap-4">
                        <img
                          src={review.accommodationImage}
                          alt={review.accommodationName}
                          className="w-16 h-16 rounded object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-bold">{review.accommodationName}</h3>
                            <span className="text-sm text-gray-500">{formatDate(review.date)}</span>
                          </div>
                          <div className="flex items-center mt-1 mb-2">
                            {[1, 2, 3, 4, 5].map(star => (
                              <svg
                                key={star}
                                className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                            ))}
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                          <div className="mt-4 flex justify-end">
                            <button className="text-sm text-blue-600 hover:underline">수정</button>
                            <span className="mx-2 text-gray-300">|</span>
                            <button className="text-sm text-red-600 hover:underline">삭제</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-lg text-gray-500">작성한 후기가 없습니다.</p>
                </div>
              )}
            </div>
          )}

          {/* Wishlist Tab */}
          {activeTab === "wishlist" && (
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <h2 className="text-2xl font-bold mb-6">위시리스트</h2>
              
              {wishlist.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {wishlist.map(item => (
                    <div key={item.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative">
                        <img 
                          src={item.imageUrl} 
                          alt={item.name} 
                          className="w-full h-48 object-cover"
                        />
                        <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full">
                          <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{item.location}</p>
                        <div className="flex justify-between items-center">
                          <span className="font-bold">{item.price.toLocaleString()}원</span>
                          <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors">
                            예약하기
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-lg text-gray-500">저장된 위시리스트가 없습니다.</p>
                  <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    숙소 둘러보기
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserAccount; 