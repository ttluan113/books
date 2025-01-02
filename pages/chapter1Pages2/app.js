const btnUp = document.getElementById('btn-up');
const btnDown = document.getElementById('btn-down');
const controllerBottom = document.getElementById('controller-bottom');
const listController = document.getElementById('list-controller');

// Xử lý sự kiện khi nhấn nút "btn-up"
btnUp.addEventListener('click', function () {
    controllerBottom.style.display = 'none';
    listController.style.display = 'block';
});

// Xử lý sự kiện khi nhấn nút "btn-down"
btnDown.addEventListener('click', function () {
    controllerBottom.style.display = 'block';
    listController.style.display = 'none';
});

//// search text

const btnSearch = document.getElementById('btn-search');
const formSearch = document.getElementById('form-search');

btnSearch.addEventListener('click', () => {
    if (formSearch.style.display === 'none') {
        formSearch.style.display = 'block';
    } else {
        formSearch.style.display = 'none';
    }
});

function highlightText() {
    const searchTerm = document.getElementById('search-term').value;

    // Lấy hai phần tử chứa nội dung
    const contentElement1 = document.getElementById('content-1');

    // Lấy nội dung của cả hai phần tử
    let content1 = contentElement1.innerHTML;

    // Loại bỏ các highlight cũ
    content1 = content1.replace(/<span class="highlight">|<\/span>/gi, '');

    if (searchTerm) {
        // Tạo biểu thức chính quy tìm kiếm từ khóa
        const regex = new RegExp(`(${searchTerm})`, 'gi');

        // Highlight từ khóa trong cả hai phần tử
        const highlightedContent1 = content1.replace(regex, '<span class="highlight">$1</span>');

        // Cập nhật lại nội dung với từ khóa được highlight
        contentElement1.innerHTML = highlightedContent1;
    } else {
        // Nếu không có từ khóa, trả lại nội dung ban đầu
        contentElement1.innerHTML = content1;
    }
}

/// modal settings
const btnSettings = document.getElementById('btn-settings');
const modalSettings = document.getElementById('form-settings');

btnSettings.addEventListener('click', () => {
    if (modalSettings.style.display === 'none') {
        modalSettings.style.display = 'block';
    } else {
        modalSettings.style.display = 'none';
    }
});

//// settings
const btnBgr1 = document.getElementById('bgr-1');
const btnBgr2 = document.getElementById('bgr-2');
const btnBgr3 = document.getElementById('bgr-3');

btnBgr2.addEventListener('click', () => {
    document.body.style.backgroundColor = '#000';
});

btnBgr1.addEventListener('click', () => {
    document.body.style.backgroundColor = '#fff';
});

btnBgr3.addEventListener('click', () => {
    document.body.style.backgroundColor = '#004aad';
});

const btnText1 = document.getElementById('text-1');
const btnText2 = document.getElementById('text-2');
const btnText3 = document.getElementById('text-3');
const content = document.querySelector('.content');

btnText1.addEventListener('click', () => {
    content.style.color = '#fff';
});

btnText2.addEventListener('click', () => {
    content.style.color = '#000';
});

btnText3.addEventListener('click', () => {
    content.style.color = '#004aad';
});

/// setting value text
const valueInput = document.getElementById('cowbell');

valueInput.addEventListener('input', () => {
    content.style.fontSize = `${valueInput.value}px`;
});

//// hight text

function highlightSelection(paragraph, className) {
    const selection = window.getSelection().toString();
    if (selection.length > 0) {
        const range = window.getSelection().getRangeAt(0);
        const span = document.createElement('span');
        span.textContent = selection;
        span.classList.add(className);
        range.deleteContents();
        range.insertNode(span);
    }
}
function test1() {
    // Lấy phần tử trong cột 1
    const paragraph1 = document.getElementById('content-1');

    if (paragraph1) {
        paragraph1.addEventListener('mouseup', function () {
            highlightSelection(paragraph1, 'highlight');
        });
    }
}

function test2() {
    // Lấy phần tử trong cột 1
    const paragraph2 = document.getElementById('content-1');
    if (paragraph2) {
        paragraph2.addEventListener('mouseup', function () {
            highlightSelection(paragraph2, 'highlight3');
        });
    }

    // Lấy phần tử trong cột 2
}

/// fullscreen

const btnFullScreen = document.getElementById('btn-full-screen');
const header = document.getElementById('header');
const videoHeader = document.getElementById('header-video');
const btnXmark = document.getElementById('test3'); // Phần tử chứa nút xmark

// Biến để theo dõi trạng thái fullscreen
let isFullScreen = false;

btnFullScreen.addEventListener('click', () => {
    // Kiểm tra nếu chưa ở chế độ fullscreen
    if (!isFullScreen) {
        // Khi vào chế độ fullscreen, ẩn header và videoHeader, hiển thị nút xmark
        header.style.display = 'none';
        videoHeader.style.display = 'none';
        btnXmark.style.display = 'block'; // Hiển thị nút xmark
        isFullScreen = true; // Đánh dấu đã vào fullscreen
    }
});

btnXmark.addEventListener('click', () => {
    // Khi nhấn vào nút xmark, thoát chế độ fullscreen
    if (isFullScreen) {
        header.style.display = 'flex';
        videoHeader.style.display = 'block';
        btnXmark.style.display = 'none'; // Ẩn nút xmark
        isFullScreen = false; // Đánh dấu thoát fullscreen
    }
});

// Dữ liệu câu hỏi
const questionsContent1 = document.querySelector('.questions .questions-content');
const questionsContent2 = document.querySelector('.questions2 .questions-content');
const questionsContent3 = document.querySelector('.questions3 .questions-content');

const submitBtn = document.querySelector('.submit');
const resetBtn = document.querySelector('.reset');

// Dữ liệu câu hỏi phần I (Chọn Đúng Sai)
const questionsPart1 = [
    {
        question: 'Câu 1: Thành phố Roma được gọi là "thành phố vĩnh cửu" vì lịch sử lâu đời từ thời La Mã cổ đại.',
        correctAnswers: ['Đúng'], // Một đáp án đúng
    },
    {
        question:
            'Câu 2: Vĩ tuyến 38 chia bán đảo Triều Tiên thành hai quốc gia Bắc Triều Tiên và Hàn Quốc từ năm 1945.',
        correctAnswers: ['Đúng'], // Một đáp án đúng
    },
    {
        question: 'Câu 3: Đảo Greenland là lục địa nhỏ nhất thế giới với diện tích hơn 7,6 triệu km².',
        correctAnswers: ['Sai'], // Một đáp án đúng
    },
    {
        question: 'Câu 4: Hồ Bai Can (Baikal) ở Nga là hồ nước ngọt sâu nhất thế giới.',
        correctAnswers: ['Đúng'], // Một đáp án đúng
    },
    {
        question: 'Câu 5: Kinh tuyến gốc số 0 đi qua thành phố Paris, nước Pháp.',
        correctAnswers: ['Sai'], // Một đáp án đúng
    },
];

const questionsPart2 = [
    {
        question: 'Câu 1: Đâu là quốc gia nhỏ nhất thế giới về diện tích?',
        answers: ['Monaco', 'Vatican', 'Singapore', 'Malta'],
        correctAnswers: ['Vatican'], // Một đáp án đúng
    },
    {
        question: 'Câu 2: Đỉnh núi cao nhất thế giới là gì?',
        answers: ['Everest', 'Mont Blanc', 'K2', 'Kilimanjaro'],
        correctAnswers: ['Everest'], // Một đáp án đúng
    },
    {
        question: 'Câu 3: Cảng lớn nhất Đông Á là cảng nào?',
        answers: ['Yokohama (Nhật Bản)', 'Busan (Hàn Quốc)', 'Thượng Hải (Trung Quốc)', 'Hong Kong'],
        correctAnswers: ['Thượng Hải (Trung Quốc)'], // Một đáp án đúng
    },
    {
        question: 'Câu 4: Sông nào dài nhất châu Á?',
        answers: ['Sông Mekong', 'Sông Hoàng Hà', 'Sông Trường Giang', 'Sông Ganges'],
        correctAnswers: ['Sông Trường Giang'], // Một đáp án đúng
    },
    {
        question: 'Câu 5: Sa mạc lớn nhất thế giới là gì?',
        answers: ['Sahara', 'Gobi', 'Kalahari', 'Atacama'],
        correctAnswers: ['Sahara'], // Một đáp án đúng
    },
];

const questionsPart3 = [
    {
        question: 'Câu 1: Hai lục địa nào được xem là nhỏ nhất thế giới?',
        answers: ['Châu Phi', 'Châu Úc', 'Châu Âu', 'Nam Mỹ'],
        correctAnswers: ['Châu Úc', 'Châu Âu'], // Đáp án đúng
    },
    {
        question: 'Câu 2: Các thành phố nào nằm giữa hai lục địa?',
        answers: ['Istanbul', 'Cairo', 'Rome', 'Casablanca'],
        correctAnswers: ['Istanbul', 'Cairo'], // Đáp án đúng
    },
    {
        question: 'Câu 3: Đâu là hai đỉnh núi cao nhất trong danh sách sau?',
        answers: ['Everest', 'Mont Blanc', 'Denali', 'Kilimanjaro'],
        correctAnswers: ['Everest', 'Mont Blanc'], // Đáp án đúng
    },
    {
        question: 'Câu 4: Hai đại dương nào lớn nhất thế giới?',
        answers: ['Thái Bình Dương', 'Đại Tây Dương', 'Ấn Độ Dương', 'Bắc Băng Dương'],
        correctAnswers: ['Thái Bình Dương', 'Đại Tây Dương'], // Đáp án đúng
    },
    {
        question: 'Câu 5: Hai quốc gia nào chia sẻ đảo Sip?',
        answers: ['Thổ Nhĩ Kỳ', 'Hy Lạp', 'Italy', 'Ai Cập'],
        correctAnswers: ['Thổ Nhĩ Kỳ', 'Hy Lạp'], // Đáp án đúng
    },
];

// Hiển thị câu hỏi phần I (Chọn Đúng Sai)
questionsPart1.forEach((item, index) => {
    const questionHtml = `
        <div class="question-block" data-index="${index}">
            <p>${item.question}</p>
            <div class="answer">
                <button class="btn-answer" data-answer="Đúng" data-correct="${item.correctAnswers.includes(
                    'Đúng',
                )}">Đúng</button>
                <button class="btn-answer" data-answer="Sai" data-correct="${item.correctAnswers.includes(
                    'Sai',
                )}">Sai</button>
            </div>
        </div>
    `;
    questionsContent1.innerHTML += questionHtml;
});

// Hiển thị câu hỏi phần II (Chọn Đáp Án Đúng Nhất)
questionsPart2.forEach((item, index) => {
    const options = item.answers
        .map(
            (answer) =>
                `<button class="btn-answer" data-answer="${answer}" data-correct="${item.correctAnswers.includes(
                    answer,
                )}">${answer}</button>`,
        )
        .join('');
    const questionHtml = `
        <div class="question-block" data-index="${index}">
            <p>${item.question}</p>
            <div class="answer">
                ${options}
            </div>
        </div>
    `;
    questionsContent2.innerHTML += questionHtml;
});

questionsPart3.forEach((item, index) => {
    const options = item.answers
        .map(
            (answer) =>
                `<button class="btn-answer" data-answer="${answer}" data-correct="${item.correctAnswers.includes(
                    answer,
                )}">${answer}</button>`,
        )
        .join('');
    const questionHtml = `
        <div class="question-block" data-index="${index}">
            <p>${item.question}</p>
            <div class="answer">
                ${options}
            </div>
        </div>
    `;
    questionsContent3.innerHTML += questionHtml;
});

// Sự kiện chọn đáp án
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-answer')) {
        const parent = event.target.closest('.answer');
        const isMultipleCorrect = parent.querySelectorAll('.btn-answer[data-correct="true"]').length > 1;

        if (isMultipleCorrect) {
            // Nếu có nhiều đáp án đúng, cho phép chọn hoặc bỏ chọn
            event.target.classList.toggle('selected');
            event.target.style.border = event.target.classList.contains('selected')
                ? '4px solid #636363'
                : '4px solid #ccc';
        } else {
            // Nếu chỉ có một đáp án đúng
            parent.querySelectorAll('.btn-answer').forEach((btn) => {
                btn.classList.remove('selected'); // Xóa lựa chọn cũ
                btn.style.border = '4px solid #ccc'; // Reset viền
            });
            event.target.classList.add('selected'); // Thêm lựa chọn mới
            event.target.style.border = '4px solid #636363'; // Viền khi chọn
        }
    }
});

// Nộp bài
submitBtn.addEventListener('click', () => {
    document.querySelectorAll('.question-block').forEach((block) => {
        const selectedButtons = block.querySelectorAll('.btn-answer.selected');
        const correctAnswers = Array.from(block.querySelectorAll('.btn-answer[data-correct="true"]')).map((btn) =>
            btn.getAttribute('data-answer'),
        );

        selectedButtons.forEach((btn) => {
            const userAnswer = btn.getAttribute('data-answer');
            if (correctAnswers.includes(userAnswer)) {
                btn.style.border = '4px solid green'; // Đúng
            } else {
                btn.style.border = '4px solid red'; // Sai
            }
        });

        // Đảm bảo rằng các nút chưa chọn được kiểm tra đúng nếu là đáp án đúng
        block.querySelectorAll('.btn-answer').forEach((btn) => {
            if (!btn.classList.contains('selected') && correctAnswers.includes(btn.getAttribute('data-answer'))) {
                btn.style.border = '4px solid red'; // Sai (nếu không chọn nhưng đúng)
            }
        });
    });
});

// Xóa hết đáp án
resetBtn.addEventListener('click', () => {
    document.querySelectorAll('.btn-answer').forEach((btn) => {
        btn.style.border = '4px solid #ccc'; // Reset viền mặc định
        btn.classList.remove('selected'); // Xóa trạng thái chọn
    });
});

// Thêm sự kiện click cho tất cả các nút comment
// Thêm sự kiện click cho tất cả các nút comment
document.querySelectorAll('.comment-btn').forEach(function (button) {
    button.addEventListener('click', function (event) {
        // Ngăn chặn các sự kiện không mong muốn
        event.stopPropagation();

        // Đóng tất cả các bảng comment khác
        document.querySelectorAll('.form-comment').forEach(function (form) {
            if (form !== button.nextElementSibling) {
                form.style.display = 'none';
            }
        });

        // Mở/đóng bảng ghi chú tương ứng
        const formComment = this.nextElementSibling;
        formComment.style.display = formComment.style.display === 'block' ? 'none' : 'block';
    });
});

// Thêm sự kiện click cho nút xmark để đóng modal
document.querySelectorAll('.form-comment .fa-xmark').forEach(function (closeButton) {
    closeButton.addEventListener('click', function (event) {
        // Ngăn chặn sự kiện click lan ra ngoài
        event.stopPropagation();

        // Đóng modal ghi chú
        const formComment = this.closest('.form-comment');
        formComment.style.display = 'none';
    });
});

const modalMenu = document.querySelector('.header-1');
const btnMenu = document.getElementById('btn-header');

btnMenu.addEventListener('click', () => {
    if (modalMenu.style.display === 'none') {
        modalMenu.style.display = 'block';
    } else {
        modalMenu.style.display = 'none';
    }
});

document.getElementById('btn-up-1').addEventListener('click', function () {
    var content = document.querySelector('.content');
    content.scrollTo({
        top: content.scrollHeight, // Cuộn đến cuối của phần tử .content
        behavior: 'smooth', // Cuộn mượt mà
    });
});

document.getElementById('btn-down-1').addEventListener('click', function () {
    var content = document.querySelector('.content');
    content.scrollTo({
        top: 0, // Cuộn lên đầu của phần tử .content
        behavior: 'smooth', // Cuộn mượt mà
    });
});

const btnFontText1 = document.getElementById('font-text-1');
const btnFontText2 = document.getElementById('font-text-2');
const des = document.querySelectorAll('.inner-content p');

btnFontText1.addEventListener('click', () => {
    des.forEach((paragraph) => {
        paragraph.style.fontFamily = 'Times New Roman';
    });
});

btnFontText2.addEventListener('click', () => {
    des.forEach((paragraph) => {
        paragraph.style.fontFamily = 'Open Sans';
    });
});
