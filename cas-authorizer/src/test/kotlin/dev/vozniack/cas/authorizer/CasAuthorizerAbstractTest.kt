package dev.vozniack.cas.authorizer

import io.zonky.test.db.AutoConfigureEmbeddedDatabase
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.ActiveProfiles

@SpringBootTest
@AutoConfigureEmbeddedDatabase
@ActiveProfiles(profiles = ["test"])
abstract class CasAuthorizerAbstractTest