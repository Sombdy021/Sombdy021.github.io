const button = document.querySelector(".container button");
const jokeDiv = document.querySelector(".container .joke p");

let data = {
	joke0: '– Что с тобой дружище?! Ты изцарапан, под глазами синяки, одежда порвана. Давай я провожу тебя домой…<br>– Я из дома…',
	joke1: '– Что такое счастье?<br>– Это крепкое здоровье и… плохая память.',
	joke2: '– Доктор, сколько можно прожить без мозга?<br>– А сколько Вам лет?',
	joke3: 'Рыболов насаживает на крючок червяка, а тот и говорит ему:<br>– Мужик, ты слишком резко–то не подсекай, а то у меня уши закладывает! ',
	joke4: '- Дорогой, у нас родился сын!<br>— Отлично! А как назвали?',
	joke5: 'Штирлиц вёл двойную жизнь и очень надеялся, что хоть одна из них сложится удачно.',
	joke6: 'Курица клевала носом.<br>"Наверное не выспалась", - подумал Штирлиц',
	joke7: 'Всего в жизни я добился своим горбом,<br>— Грустно сказал верблюд, сплюнув от досады.',
	joke8: 'В дверь кто-то вежливо постучал ногой.<br>- Безруков! - догадался Штирлиц.',
	joke9: 'Штирлиц, проходя по переулку заметил, как маляр закрашивал матерные слова на заборе.<br>- "Модератор" - подумал Штирлиц.',
	joke10: '-Что вы, сорванцы, делаете?<br>— Гайки с рельсов свинчиваем.<br>-Зачем?<br>— Лом железный сдавать.<br>-Да много ли гайки-то весят?<br>— Гайки то немного, а вот паровоз с вагонами.',
	joke11: 'Штирлиц попал в глубокую яму и чудом из нее вылез. <br>"Чудес не бывает", - подумал Штирлиц и на всякий случай залез обратно.',
	joke12: 'Ехал мужик по деревне и сбил петуха.Останавливается, подбирает петуха и приходит с ним к хозяину:<br>— Я бы хотел заменить вам этого петушка.<br>-Нет проблем. Куры в курятнике.',
	joke13: '- Как я вас узнаю?<br>- Вам навстречу будет идти девушка и вы подумаете - хоть бы не она! Так вот, это буду я.',
	joke14: '- Штирлиц, а вас я попрошу остаться, - сказал Мюллер, доставая из сейфа бутылку армянского коньяка и плитку советского шоколада.<br>- Ну наконец-то проявился связной, - подумал Штирлиц, увидев пароль.',
	joke15: 'Штирлиц подошел к аэропорту, и дверь автоматически открылась.<br>"Узнала", - подумал Штирлиц.',
	joke16: 'Штирлиц проводил Кэт до подъезда. Кэт сказала:<br>- Давайте встретимся завтра, у роддома...<br>Штирлиц поднял глаза и увидел в окне свет - урод действительно был дома.',
	joke17: 'Штирлиц сунул вилку в розетку, но ему тактично намекнули, что из розетки едят ложечкой.<br>Штирлиц в трудные жизненные моменты мог довольствоваться малым.<br>Вот только малому это не нравилось.',
	joke18: 'Мюллер выглянул в окно. По улице шел Штирлиц, ведя на поводке крохотную, зеленую с оранжевыми полосками, шестиногую собачонку.<br>"Странно, - подумал Мюллер, - этого анекдота я еще не знаю..."',
	joke19: 'Письмо из центра до Штирлица не дошло.<br>Штирлиц прочитал еще раз.<br>Все равно не дошло',
	joke20: 'Мюллер раскрыл явку Штирлица, но получил по морде и больше не брал чужих сигарет.',
	joke21: 'Дорогой, мне кажется, в карбюратор вода попала...<br>- Ой, какие мы умные стали… в машинах разбираемся. Ты хоть знаешь, где карбюратор находится?<br>- В машине...<br>- А машина где?<br>- В озере...',
	joke22: 'Штирлиц подошел к цветочному магазину и поднял глаза — это были глаза профессора Плейшера.',
	joke23: 'Гестапо обложило все выходы, но Штирлиц вышел через вход.',
	joke24: 'Прямо в глаза Штирлицу ударил яркий луч фонарика.<br>«Следят», — подумал Штирлиц.',
	joke25: 'Идут параноик и шизофреник.Параноик:<br>— Давай перейдём на другую сторону, навстречу гопники идут.<br>— Фигня, пошли вперёд.<br>Гопники нападают, шизофреник всех раскидал.<br>— Как ты это сделал?<br>— Легко. Их было 5, а меня 10...',
	joke26: 'Дом Штирлица окружила рота эсэсовцев. Постучали в дверь. «Меня нет дома» — ответил Штирлиц. Они уехали. Вот уже третий месяц талантливый разведчик водит за нос имперскую службу безопасности.',
	joke27: 'Штирлиц пришел к выводу. Но Вывода не оказалось дома.',
	joke28: 'Штирлиц шел по улице и вдруг услышал сзади шум мотора.<br>«Не трамвай, объедет», — подумал Штирлиц.<br>Оказалось — трамвай.',
	joke29: 'Настоящая сторожевая собака, перед тем, как напасть на нарушителя, должна издать 2 предупредительных гавка вверх.',
	joke30: 'Электричка. Цыганка - мужику:<br>- Позалати ручку, дарагой! Всё что хочешь скажу!!<br>Мужик достаёт 500 евро:<br>- А скажи ка ты мне, голубушка, период полураспада радия!<br>Цыганка в шоке, глаза вытаращила...<br>- Ну видишь, не заслужила.',
	joke31: '- Ок, как я тебя узнаю?<br>- Я буду в черной шапке и синих джинсах, рост примерно 185, вес 84.<br>- Ок, я буду в черной куртке с весами и рулеткой.',
	joke32: 'Доктор предложил мне пропить железо. Теперь у меня нет машины и гаража... ',
	joke33: 'Василий Ивановач:-Петька,приборы!<br>Петька:-300!<br>Василий Иванович:-Что 300?<br>Петька:-А что приборы?',
	joke34: '— Василий Иванович! А за что вас списали с подлодки?<br>— Я спал с открытым окном.',
	joke35: 'В дверь постучали 8 раз.<br>- "Наверное это очень взволнованный человек, но точно не осьминог, ведь осьминоги не могут ходить и стучать, тем более откуда тут взяться осьминогу" - подумал Штирлиц.<br>- Душнила. - подумал осьминог',
	joke36: 'Как называется место в лесу, где и смешно и грустно?<br>.<br>.<br>.<br>.<br>.<br>Биполяночка',
	joke37: 'Байден объявил о новом пакете санкций против Белоруссии.<br>Это просто обычный пакет, но внутри колорадские жуки'
}
	
let Mass = Object.values(data)

button.addEventListener("click", getJock);
window.addEventListener("load", getJock());



function getJock() {
	jokeDiv.innerHTML = Mass[Math.round(Math.random()*Mass.length-1)]
	console.log(jokeDiv.innerHTML)
}
