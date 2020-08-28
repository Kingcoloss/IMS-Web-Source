export default function ({ isHMR, app, store, route, params, error, redirect }) {
    const defaultLocale = app.i18n.fallbackLocale
    // If middleware is called from hot module replacement, ignore it
    if (isHMR) { return }

    // Get locale from params
    // const locale = params.lang || defaultLocale
    // if (!store.state.locales.includes(locale)) {
    //     return error({ message: 'This page could not be found.', statusCode: 404 })
    // }

    // Set locale from params
    // store.dispatch('setLocales', locale)
    // app.i18n.locale = store.state.locale

    // Set locale
    app.i18n.locale = store.getters.getLocal
}
