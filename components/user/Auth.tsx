"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

type AuthMode = "login" | "register";

export const Auth: React.FC = () => {
  const router = useRouter();
  const [mode, setMode] = useState<AuthMode>("login");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleMode = () => {
    setMode(prev => (prev === "login" ? "register" : "login"));
    setError(null);
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError("이메일과 비밀번호를 입력해주세요.");
      return false;
    }

    if (mode === "register") {
      if (!formData.firstName || !formData.lastName) {
        setError("이름을 입력해주세요.");
        return false;
      }
      if (formData.password !== formData.confirmPassword) {
        setError("비밀번호가 일치하지 않습니다.");
        return false;
      }
      if (formData.password.length < 8) {
        setError("비밀번호는 8자 이상이어야 합니다.");
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      // In a real application, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (mode === "login") {
        // Simulate authentication
        localStorage.setItem("user", JSON.stringify({
          email: formData.email,
          name: "User Name",
        }));
      } else {
        // Simulate registration
        localStorage.setItem("user", JSON.stringify({
          email: formData.email,
          name: `${formData.firstName} ${formData.lastName}`,
        }));
      }
      
      // Redirect after successful auth
      router.push("/");
    } catch (err) {
      setError("인증에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6">
          {mode === "login" ? "로그인" : "회원가입"}
        </h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          {mode === "register" && (
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  이름
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  value={formData.lastName}
                  onChange={handleChange}
                  className="block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          )}
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              이메일
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          {mode === "register" && (
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                전화번호
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          )}
          
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          {mode === "register" && (
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                비밀번호 확인
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          )}
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex justify-center items-center"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                처리 중...
              </>
            ) : mode === "login" ? "로그인" : "회원가입"}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            {mode === "login" ? "계정이 없으신가요?" : "이미 계정이 있으신가요?"}
            <button
              onClick={toggleMode}
              className="ml-1 text-blue-600 hover:underline focus:outline-none"
            >
              {mode === "login" ? "회원가입" : "로그인"}
            </button>
          </p>
        </div>
        
        {mode === "login" && (
          <div className="mt-4 text-center">
            <button className="text-sm text-blue-600 hover:underline focus:outline-none">
              비밀번호를 잊으셨나요?
            </button>
          </div>
        )}

        <div className="mt-8 pt-6 border-t">
          <div className="flex items-center justify-center mb-4">
            <span className="text-sm text-gray-500">또는</span>
          </div>
          
          <button className="w-full mb-2 py-2.5 px-4 border border-gray-300 rounded-md flex items-center justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.61z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google로 계속하기
          </button>
          
          <button className="w-full py-2.5 px-4 border border-gray-300 rounded-md flex items-center justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6 13.8C16.6 17.1 14.9 19.8 12 19.8C9.1 19.8 7.4 17.1 7.4 13.8C7.4 10.5 9.1 7.8 12 7.8C14.9 7.8 16.6 10.5 16.6 13.8Z" fill="#FFCD00"/>
              <path d="M12 7.8C14.9 7.8 16.6 5.1 16.6 1.8H7.4C7.4 5.1 9.1 7.8 12 7.8Z" fill="#03CF5D"/>
              <path d="M7.4 1.8C4.5 1.8 2.8 4.5 2.8 7.8C2.8 11.1 4.5 13.8 7.4 13.8C10.3 13.8 12 11.1 12 7.8C12 4.5 10.3 1.8 7.4 1.8Z" fill="#EA1D60"/>
              <path d="M16.6 1.8C13.7 1.8 12 4.5 12 7.8C12 11.1 13.7 13.8 16.6 13.8C19.5 13.8 21.2 11.1 21.2 7.8C21.2 4.5 19.5 1.8 16.6 1.8Z" fill="#00A5E5"/>
            </svg>
            카카오로 계속하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth; 