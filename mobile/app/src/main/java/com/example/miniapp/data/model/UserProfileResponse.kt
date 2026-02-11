package com.example.miniapp.data.model

data class UserProfileResponse(
    val id: Long,
    val email: String,
    val firstName: String?,
    val lastName: String?,
    val createdAt: String?,
    val lastLogin: String?
)
