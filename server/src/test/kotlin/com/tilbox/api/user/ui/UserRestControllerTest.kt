package com.tilbox.api.user.ui

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.tilbox.api.user.application.dto.request.UserCreateRequest
import com.tilbox.base.test.RestControllerTest
import org.junit.jupiter.api.Test
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.post

class UserRestControllerTest() : RestControllerTest() {
    @Test
    fun `회원가입을 요청하여 가입된 정보를 반환한다`() {
        // given
        val request = UserCreateRequest("nullable", "nullable@kakao.com", "ks-kim", null, "password2021##@@")

        // when
        val actual = mockMvc.post("/v1/users") {
            content = jacksonObjectMapper().writeValueAsBytes(request)
            accept = MediaType.APPLICATION_JSON
            contentType = MediaType.APPLICATION_JSON
        }

        // then
        actual.andExpect {
            status { isCreated() }
        }
    }

    @Test
    fun `회원가입한 계정으로 로그인에 성공한다`() {
        // given
        val userCreateRequest = UserCreateRequest("nullable", "nullable@kakao.com", "ks-kim", null, "password2021!")
        mockMvc.post("/v1/users") {
            content = jacksonObjectMapper().writeValueAsBytes(userCreateRequest)
            accept = MediaType.APPLICATION_JSON
            contentType = MediaType.APPLICATION_JSON
        }

        // when
        val actual = mockMvc.post("/login") {
            param("username", "nullable@kakao.com")
            param("password", "password2021!")
            contentType = MediaType.APPLICATION_FORM_URLENCODED
        }

        // then
        actual.andExpect {
            status { isOk() }
        }
    }
}
