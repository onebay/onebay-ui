import buildApp from './app';

const { app, router } = buildApp();

router.isReady()
  .then(() => {
    app.mount('#app', true);
  });
