# Выполненное тестовое задание

http://kate.cv89914.tmweb.ru/NOTAB1/app/index.html
http://kate.cv89914.tmweb.ru/NOTAB1/app/slider.html

## Верстка

### Требования:
* Верстка должна адаптивной и корректно отображаться в последней версии Google Chrome и Firefox
* Верстка должна быть валидной
* Использование семантических тэгов
* БЭМ
* Валидация формы (все поля обязательны, error-состояние в макете
* hover-состояния для кликабельных элементов
* Анимацию делать не обязательно

## Javascript

Нужно сделать слайдер на чистом js (без jquery)

### Требования:
* Слайдер должен работать на любом количестве изображений от 1 до 10.
* При клике на правый контрол (стрелочку) слайдера, когда слайдер доходит до последнего изображения, первое изображение должно также выезжать справа. Неправильный вариант: слайдер прокручивается налево до первого изображения.
* Делать анимацию на javascript и не использовать css transitions. setInterval - функция которая понадобится, чтобы сделать анимацию.
* Если кликать много раз на слайдер во время анимации слайды не должны переключаться до тех пор, пока анимация не закончится. Например: Если я кликаю 20 раз на контрол (стрелку) слайдера во время анимации - ничего не происходит. Когда анимация закончилась и я кликнул 21 раз - слайд переключился на следующий.
* При клике на точку внизу слайдера, я должен перейти на соотв. слайд. Если текущий слайд и есть тот на который я кликнул - ничего не должно происходить.
* Точка текущего слайда должна как-то выделяться.
* Перетаскивание слайдов мышкой (как в примере) делать не нужно.
* Управление с клавиатуры (как в примере) делать не нужно.
* Должен работать корректно в последней версии Firefox и Chrome.
