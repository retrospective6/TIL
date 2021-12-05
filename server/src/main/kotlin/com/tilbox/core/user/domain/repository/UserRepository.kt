package com.tilbox.core.user.domain.repository

import com.tilbox.core.user.domain.entity.User
import com.tilbox.core.user.domain.value.RegistrationType
import org.springframework.data.jpa.repository.JpaRepository

interface UserRepository : JpaRepository<User, Long> {
    fun findByMyTilAddress(loginId: String): User?

    fun findByEmail(email: String): User?

    fun findByEmailAndRegistrationType(email: String, registrationType: RegistrationType): User?

    fun existsByMyTilAddress(myTilAddress: String): Boolean

    fun existsByEmailAndRegistrationType(email: String, registrationType: RegistrationType): Boolean
}
