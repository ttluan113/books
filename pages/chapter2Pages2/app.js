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
        question: 'Câu 1: Tia chớp có hình dạng giống cây khô treo ngược do sự phân nhánh của tia chớp tiên dẫn.',
        correctAnswers: ['Đúng'], // Một đáp án đúng
    },
    {
        question: 'Câu 2: Chớp chỉ có thể xuất hiện dạng phân nhánh như cây và không bao giờ có hình cầu.',
        correctAnswers: ['Sai'], // Một đáp án đúng
    },
    {
        question:
            'Câu 3: Sét thường đánh vào các vật thể cao đứng đơn độc vì chúng có mật độ điện tích cảm ứng cao hơn các vật thể xung quanh.',
        correctAnswers: ['Đúng'], // Một đáp án đúng
    },
    {
        question: 'Câu 4: Ánh sáng từ tia chớp đến chúng ta chậm hơn âm thanh từ tiếng sấm.',
        correctAnswers: ['Sai'], // Một đáp án đúng
    },
    {
        question:
            'Câu 5: Mọi vật, bao gồm con người, không bị văng ra khỏi Trái đất khi nó quay vì lực hấp dẫn của Trái đất.',
        correctAnswers: ['Đúng'], // Một đáp án đúng
    },
];

const questionsPart2 = [
    {
        question: 'Câu 1: Băng trên mái nhà hình thành như thế nào?',
        answers: [
            'Do tuyết tan chảy và đóng băng lại ở nhiệt độ dưới 0°C trên rìa mái nhà.',
            'Do tuyết đóng băng ngay trên mái nhà khi nhiệt độ của Mặt trời không đủ mạnh.',
            'Do nước mưa rơi xuống mái nhà rồi đóng băng lại.',
            'Do ánh sáng Mặt trời làm tan băng rồi đổ xuống thành băng.',
        ],
        correctAnswers: ['Do tuyết tan chảy và đóng băng lại ở nhiệt độ dưới 0°C trên rìa mái nhà.'], // Một đáp án đúng
    },
    {
        question: 'Câu 2: Tại sao kim cương lại rắn và cứng đến như vậy?',
        answers: [
            'Vì cấu trúc phân tử của kim cương xếp theo tầng, làm chúng dễ bị trượt.',
            'Vì các nguyên tử cacbon trong kim cương liên kết chặt chẽ tạo thành cấu trúc kết tinh rất cứng.',
            'Vì kim cương có nhiều tạp chất làm tăng độ cứng.',
            'Vì kim cương được hình thành ở nhiệt độ thấp và áp suất cao, giúp tăng cường độ cứng.',
        ],
        correctAnswers: [
            'Vì các nguyên tử cacbon trong kim cương liên kết chặt chẽ tạo thành cấu trúc kết tinh rất cứng.',
        ], // Một đáp án đúng
    },
    {
        question: 'Câu 3: Điều gì làm thuỷ tinh trong suốt?',
        answers: [
            'Vì các phân tử của thuỷ tinh được sắp xếp một cách trật tự như các chất rắn khác.',
            'Vì thuỷ tinh có cấu trúc phân tử ngẫu nhiên, ánh sáng dễ dàng đi qua.',
            'Vì thuỷ tinh chứa nhiều tạp chất, giúp ánh sáng phản chiếu mạnh mẽ.',
            'Vì thuỷ tinh được làm từ các chất lỏng, không bị cản ánh sáng.',
        ],
        correctAnswers: ['Vì thuỷ tinh có cấu trúc phân tử ngẫu nhiên, ánh sáng dễ dàng đi qua.'], // Một đáp án đúng
    },
    {
        question: 'Câu 4: Tại sao nam châm mất dần từ tính?',
        answers: [
            'Vì nam châm bị mất từ tính khi bị tác động bởi nhiệt độ và rung động mạnh.',
            'Vì các vùng từ tính trong nam châm bị trộn lẫn với các tạp chất, làm mất từ tính.',
            'Vì nam châm tự động mất từ tính sau một thời gian sử dụng.',
            'Vì từ tính trong nam châm bị tác động bởi từ trường mạnh bên ngoài.',
        ],
        correctAnswers: ['Vì nam châm bị mất từ tính khi bị tác động bởi nhiệt độ và rung động mạnh.'], // Một đáp án đúng
    },
    {
        question: 'Câu 5: Cực quang là hiện tượng như thế nào?',
        answers: [
            'Cực quang là hiện tượng ánh sáng do sóng vô tuyến phát ra.',
            'Cực quang xảy ra khi dòng hạt mang điện từ Mặt trời va chạm với khí quyển Trái đất.',
            'Cực quang được tạo ra bởi các tia sáng từ các ngôi sao.',
            'Cực quang là hiện tượng khí quyển Trái đất phản chiếu ánh sáng từ Mặt Trời.',
        ],
        correctAnswers: ['Cực quang xảy ra khi dòng hạt mang điện từ Mặt trời va chạm với khí quyển Trái đất.'], // Một đáp án đúng
    },
];

const questionsPart3 = [
    {
        question: 'Câu 1: Tại sao không thể làm cho một hạt như electron đạt vận tốc ánh sáng?',
        answers: [
            'Vì electron có khối lượng rất nhỏ.',
            'Vì electron không thể thu được năng lượng vô hạn.',
            'Vì tốc độ ánh sáng là cực đại trong vũ trụ.',
            'Vì khi đạt vận tốc gần ánh sáng, electron sẽ không thể chuyển động nhanh hơn nữa.',
        ],
        correctAnswers: [
            'Vì electron không thể thu được năng lượng vô hạn.',
            'Vì tốc độ ánh sáng là cực đại trong vũ trụ.',
            'Vì khi đạt vận tốc gần ánh sáng, electron sẽ không thể chuyển động nhanh hơn nữa.',
        ], // Đáp án đúng
    },
    {
        question: 'Câu 2: Điều gì ảnh hưởng đến sự tăng tốc khi người nhảy dù rơi tự do?',
        answers: [
            'Sức cản của không khí làm giảm tốc độ tăng của người nhảy dù.',
            'Vận tốc người nhảy dù sẽ không bao giờ vượt quá 50 m/s.',
            'Vận tốc người nhảy dù tăng mãi cho đến khi mở dù.',
            'Vận tốc người nhảy dù đạt ổn định sau 12 giây rơi.',
        ],
        correctAnswers: [
            'Sức cản của không khí làm giảm tốc độ tăng của người nhảy dù.',
            'Vận tốc người nhảy dù đạt ổn định sau 12 giây rơi.',
        ], // Đáp án đúng
    },
    {
        question: 'Câu 3: Cách tính trọng lượng của các ngôi sao dựa vào các yếu tố nào?',
        answers: [
            'Khoảng cách và chu kỳ chuyển động của các thiên thể.',
            'Khối lượng của Trái Đất và các thiên thể khác.',
            'Gia tốc của lực hấp dẫn trên Trái Đất.',
            'Dựa vào các quỹ đạo của các thiên thể.',
        ],
        correctAnswers: [
            'Khoảng cách và chu kỳ chuyển động của các thiên thể.',
            'Dựa vào các quỹ đạo của các thiên thể.',
        ], // Đáp án đúng
    },
    {
        question: 'Câu 4: Những điều kiện nào cần thiết để xảy ra hiện tượng nhật thực?',
        answers: [
            'Ba thiên thể Trái Đất, Mặt Trăng và Mặt Trời phải thẳng hàng.',
            'Mặt Trăng phải che khuất toàn bộ Mặt Trời.',
            'Mặt Trăng phải có kích thước lớn hơn Mặt Trời.',
            'Hiện tượng chỉ xảy ra khi Mặt Trăng ở gần Trái Đất.',
        ],
        correctAnswers: [
            'Ba thiên thể Trái Đất, Mặt Trăng và Mặt Trời phải thẳng hàng.',
            'Hiện tượng chỉ xảy ra khi Mặt Trăng ở gần Trái Đất.',
        ], // Đáp án đúng
    },
    {
        question: 'Câu 5: Tại sao bầu trời có màu xanh và không gian lại màu đen?',
        answers: [
            'Ánh sáng xanh bị tán xạ nhiều hơn các màu khác trong không khí.',
            'Ánh sáng Mặt Trời truyền qua không gian không bị tán xạ.',
            'Mắt người nhạy cảm hơn với màu xanh.',
            'Không gian ngoài Trái Đất không chứa khí để phản chiếu ánh sáng.',
        ],
        correctAnswers: [
            'Ánh sáng xanh bị tán xạ nhiều hơn các màu khác trong không khí.',
            'Ánh sáng Mặt Trời truyền qua không gian không bị tán xạ.',
            'Mắt người nhạy cảm hơn với màu xanh.',
        ], // Đáp án đúng
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
