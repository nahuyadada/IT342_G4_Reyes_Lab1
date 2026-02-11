package com.example.miniapp.data.api

import com.example.miniapp.data.model.AuthResponse
import com.example.miniapp.data.model.LoginRequest
import com.example.miniapp.data.model.RegisterRequest
import com.example.miniapp.data.model.UserProfileResponse
import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.Header
import retrofit2.http.POST

interface AuthApi {

    @POST("/api/auth/register")
    suspend fun register(@Body request: RegisterRequest): Response<AuthResponse>

    @POST("/api/auth/login")
    suspend fun login(@Body request: LoginRequest): Response<AuthResponse>

    @GET("/api/user/me")
    suspend fun getMe(@Header("Authorization") token: String): Response<UserProfileResponse>

    @POST("/api/auth/logout")
    suspend fun logout(@Header("Authorization") token: String): Response<AuthResponse>
}
