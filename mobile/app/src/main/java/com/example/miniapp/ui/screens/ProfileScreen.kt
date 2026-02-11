package com.example.miniapp.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.example.miniapp.data.api.RetrofitClient
import com.example.miniapp.data.auth.TokenManager
import com.example.miniapp.data.model.UserProfileResponse
import kotlinx.coroutines.launch
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.util.Locale

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ProfileScreen(
    tokenManager: TokenManager,
    onLogout: () -> Unit
) {
    var profile by remember { mutableStateOf<UserProfileResponse?>(null) }
    var errorMessage by remember { mutableStateOf<String?>(null) }
    var isLoading by remember { mutableStateOf(true) }
    val scope = rememberCoroutineScope()

    // Fetch profile on first composition
    LaunchedEffect(Unit) {
        val bearer = tokenManager.bearerHeader()
        if (bearer == null) {
            errorMessage = "Not authenticated"
            isLoading = false
            return@LaunchedEffect
        }
        try {
            val response = RetrofitClient.instance.getMe(bearer)
            if (response.isSuccessful) {
                profile = response.body()
            } else {
                errorMessage = "Failed to load profile"
            }
        } catch (e: Exception) {
            errorMessage = "Network error: ${e.localizedMessage}"
        } finally {
            isLoading = false
        }
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .padding(32.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text("Profile", style = MaterialTheme.typography.headlineLarge)
        Spacer(modifier = Modifier.height(8.dp))
        Text("Your account information", style = MaterialTheme.typography.bodyMedium, color = Color.Gray)
        Spacer(modifier = Modifier.height(32.dp))

        if (isLoading) {
            CircularProgressIndicator()
        }

        if (errorMessage != null) {
            Text(errorMessage!!, color = MaterialTheme.colorScheme.error)
        }

        if (profile != null) {
            Card(
                modifier = Modifier.fillMaxWidth(),
                colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surfaceVariant)
            ) {
                Column(modifier = Modifier.padding(24.dp)) {
                    ProfileRow("Name", "${profile!!.firstName ?: ""} ${profile!!.lastName ?: ""}")
                    Divider(modifier = Modifier.padding(vertical = 12.dp))
                    ProfileRow("Email", profile!!.email)
                    Divider(modifier = Modifier.padding(vertical = 12.dp))
                    ProfileRow("Last login", formatDateTime(profile!!.lastLogin))
                }
            }
            Spacer(modifier = Modifier.height(24.dp))

            OutlinedButton(
                onClick = {
                    scope.launch {
                        try {
                            tokenManager.bearerHeader()?.let {
                                RetrofitClient.instance.logout(it)
                            }
                        } catch (_: Exception) { }
                        tokenManager.clearToken()
                        onLogout()
                    }
                },
                modifier = Modifier.fillMaxWidth().height(50.dp),
                colors = ButtonDefaults.outlinedButtonColors(contentColor = MaterialTheme.colorScheme.error)
            ) {
                Text("Logout")
            }
        }
    }
}

@Composable
private fun ProfileRow(label: String, value: String) {
    Column {
        Text(label, style = MaterialTheme.typography.labelMedium, color = Color.Gray)
        Spacer(modifier = Modifier.height(4.dp))
        Text(value, style = MaterialTheme.typography.bodyLarge)
    }
}

private fun formatDateTime(raw: String?): String {
    if (raw.isNullOrBlank()) return "N/A"
    return try {
        val dt = LocalDateTime.parse(raw)
        dt.format(DateTimeFormatter.ofPattern("MMM dd, yyyy hh:mm a", Locale.getDefault()))
    } catch (_: Exception) {
        raw
    }
}
