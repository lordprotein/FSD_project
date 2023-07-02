## Envs
Node - 16.16.0

## Краткий отчет
[Ссылка на стенд](https://fsd-project-pearl.vercel.app/)
* Архитектура на основе FSD
* Redux (toolkit) flow
* Saga для обработки асинхронных функций (настроен, но не использован)
* Добавлен redux-injector для постепенного внедрения необходимых сторов и саг
* ErrorBounder для поимки 
* Styled-component с настроенным "themes"
* CI/CD который реагирует на pull_request и push to master (в данный момент логика должна быть улучшена, тк при тригере на pull_request при успешном прохождении тестов и отсутствии ошибок происходит автомерж в мастер без подтверждения)
* Настроен eslint с контролем FSD, а так же prettier
* lint-staged с автофиксом перед merge
* husky для поддержки lint-staged
* Vercel для разворачивания на сервере
* 

PS: работал в достаточно крупных компаниях, где CI/CD и тестированием занимаются отдельные крупные компании, поэтому плотно дел не имел с этим. Однако мне интересно развиваться в ширь и разбирался с этим всем по-ходу тестового. 

При выполнении задачи ставил упор на качественную реализацию FSD и CI/CD, а так же улучшением памяти и небольшого прироста производительности за счет store injectors

С FSD тоже не работал, но мне весьма понравился этот подход

Из того, что не успел реализовать и сколько времени нужно:
* JEST - раньше тестирование по всем видам тестов проводили отдельные команды и опыта не имел, но разберусь быстро. Решил не тратить на это время на тестовом и при необходимости за пару дней изучу всю базу. По флоу все понятно: создаем искуственное окружение с виртуальным Router и фейковым Redux. Тестируем работу самого компонента, а так же то, как пользователь потенциально взаимодействует с ним (интеграционный тест). По времени интеграция с покрытием теста займет примерно 2 часа по максимуму
* StoryBook - интегрировал в проекты и ранее, однако не хватило времени, тк все заняло CI/CD и погружение в FSD. По времени интеграция займет около 1 часа. По реализации тоже все достаточно просто: обогащаем декораторы моканым стором, добавляем глобальные стили, затем описываем истории, добавляя к ним необходимые args для теста, а так же можем добавить сами тесты (тесты лично не добавлял)
* Chromatic - сам лично не заливал туда, тк в основном на предыдущих проектах StoryBook лежал либо на серверах компании, либо привязан к git page, но сама задача по выпуску на Chromatic тривиальная и не требует большого кол-ва времени



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
