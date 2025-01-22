// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type IsAny<T> = 0 extends 1 & T ? true : false
type InjectionType<A extends Plugin> = IsAny<A> extends true ? unknown : A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../../../node_modules/nuxt/dist/app/plugins/revive-payload.client.js").default> &
  InjectionType<typeof import("../../../../node_modules/nuxt/dist/head/runtime/plugins/unhead.js").default> &
  InjectionType<typeof import("../../../../node_modules/nuxt/dist/pages/runtime/plugins/router.js").default> &
  InjectionType<typeof import("../../../../node_modules/nuxt/dist/app/plugins/navigation-repaint.client.js").default> &
  InjectionType<typeof import("../../../../node_modules/nuxt/dist/app/plugins/check-outdated-build.client.js").default> &
  InjectionType<typeof import("../../../../node_modules/nuxt/dist/app/plugins/revive-payload.server.js").default> &
  InjectionType<typeof import("../../../../node_modules/nuxt/dist/app/plugins/chunk-reload.client.js").default> &
  InjectionType<typeof import("../../../../node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client.js").default> &
  InjectionType<typeof import("../../../../node_modules/nuxt/dist/pages/runtime/plugins/check-if-page-unused.js").default> &
  InjectionType<typeof import("../../../../node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.server.js").default> &
  InjectionType<typeof import("../../../../node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.client.js").default> &
  InjectionType<typeof import("../../../../node_modules/@nuxtjs/strapi/dist/runtime/plugins/dns.server.js").default> &
  InjectionType<typeof import("../../../../node_modules/@nuxtjs/strapi/dist/runtime/plugins/strapi.js").default> &
  InjectionType<typeof import("../../../../node_modules/nuxt/dist/app/plugins/dev-server-logs.js").default> &
  InjectionType<typeof import("../../../../node_modules/nuxt/dist/app/plugins/check-if-layout-used.js").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }

  interface NuxtAppLiterals {
    pluginName: 'nuxt:revive-payload:client' | 'nuxt:head' | 'nuxt:router' | 'nuxt:revive-payload:server' | 'nuxt:chunk-reload' | 'nuxt:global-components' | 'nuxt:prefetch' | 'nuxt:checkIfPageUnused' | 'nuxt:checkIfLayoutUsed'
  }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
