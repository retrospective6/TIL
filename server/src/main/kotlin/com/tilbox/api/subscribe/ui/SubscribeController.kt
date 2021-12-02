package com.tilbox.api.subscribe.ui

import com.tilbox.api.subscribe.application.SubscribeService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/v1/subscription")
class SubscribeController (private val subscribeService: SubscribeService) {

    @PostMapping("/subscribe/{followerId}/")
    fun subscribe(@PathVariable followerId: Long) : ResponseEntity<Void> {
        // User 정보 필요
        subscribeService.subscribe(1L, followerId)
        return ResponseEntity
            .ok()
            .build()
    }

    @PostMapping("/unsubscribe/{followerId}/")
    fun unsubscribe(@PathVariable followerId: Long) : ResponseEntity<Void> {
        // User 정보 필요
        subscribeService.unsubscribe(1L, followerId)
        return ResponseEntity
            .ok()
            .build()
    }

}
