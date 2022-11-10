package dev.vozniack.cas.authorizer.entity.history

import dev.vozniack.cas.authorizer.types.AuthorizationHistoryStatus
import java.time.LocalDateTime
import java.util.UUID
import org.springframework.data.annotation.Id
import org.springframework.data.elasticsearch.annotations.Document

@Document(indexName = "authorization_history")
data class AuthorizationHistory(

    @Id private val id: UUID = UUID.randomUUID(),

    private val status: AuthorizationHistoryStatus,

    private val email: String,

    private val date: LocalDateTime = LocalDateTime.now(),
)
