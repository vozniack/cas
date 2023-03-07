package dev.vozniack.cas.core.service.common

import org.springframework.context.ApplicationContext
import org.springframework.context.ApplicationContextAware

abstract class ContextAwareService<T> : ApplicationContextAware {

    override fun setApplicationContext(applicationContext: ApplicationContext) {
        setContext(applicationContext)
    }

    @Synchronized
    private fun setContext(applicationContext: ApplicationContext) {
        Companion.applicationContext = applicationContext
    }

    companion object {
        private var applicationContext: ApplicationContext? = null

        fun <T> get(clazz: Class<T>): T {
            return applicationContext!!.getBean(clazz)
        }
    }
}
