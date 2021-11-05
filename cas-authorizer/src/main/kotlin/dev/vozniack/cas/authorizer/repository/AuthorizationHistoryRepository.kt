package dev.vozniack.cas.authorizer.repository

import dev.vozniack.cas.authorizer.entity.history.AuthorizationHistory
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository
import org.springframework.stereotype.Repository

@Repository
interface AuthorizationHistoryRepository : ElasticsearchRepository<AuthorizationHistory, String>