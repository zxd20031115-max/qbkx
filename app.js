const modules = [
  {
    id: "m1",
    week: "第 1 回",
    title: "机器人系统与计算机",
    summary: "机器人系统由感知、判断、记忆、通信、执行和环境构成。计算机在其中承担信息处理和控制决策。",
    tags: ["ロボットシステム", "コンピュータ", "センサ", "アクチュエータ", "情報セキュリティ"]
  },
  {
    id: "m2",
    week: "第 2 回",
    title: "数据单位、集合与进制",
    summary: "从 bit、byte、集合的包含关系开始，进入 2 进制、16 进制、补数、小数二进制和移位运算。",
    tags: ["bit", "byte", "集合", "2進数", "16進数", "2の補数", "シフト演算"]
  },
  {
    id: "m3",
    week: "第 3 回",
    title: "逻辑演算与逻辑回路",
    summary: "把集合运算对应到逻辑代数：A+B 是 OR，A·B 是 AND，Ā 是 NOT，再进一步画成逻辑门和真值表。",
    tags: ["論理積", "論理和", "否定", "NAND", "NOR", "XOR", "MIL記号", "真理値表"]
  },
  {
    id: "m4",
    week: "第 4 回",
    title: "算法、流程图与数据结构",
    summary: "算法必须正确且会停止；用流程图、疑似语言或程序语言表达。重点包括栈、队列、递归、最大公约数。",
    tags: ["アルゴリズム", "フローチャート", "スタック", "キュー", "再帰"]
  },
  {
    id: "m5",
    week: "第 5 回",
    title: "CPU、存储器与处理流程",
    summary: "CPU 配合寄存器、主存、缓存、辅助存储，反复执行取指、译码、执行、写回。",
    tags: ["CPU", "制御装置", "演算装置", "レジスタ", "キャッシュメモリ", "MIPS"]
  },
  {
    id: "m6",
    week: "第 6 回",
    title: "输入输出接口与系统可靠性",
    summary: "USB、HDMI、Wi-Fi、Bluetooth 等接口负责设备间通信；题目常考数据量、帧率、稼働率。",
    tags: ["インターフェイス", "USB", "HDMI", "Wi-Fi", "Bluetooth", "稼働率"]
  },
  {
    id: "m7",
    week: "第 7 回",
    title: "软件、OS 与文件系统",
    summary: "硬件之上是 OS，中间件为应用提供通用功能，文件系统负责组织和管理数据。",
    tags: ["ハードウェア", "ソフトウェア", "OS", "ミドルウェア", "ファイルシステム"]
  },
  {
    id: "m8",
    week: "第 8 回",
    title: "半导体、CMOS 与记忆电路",
    summary: "半导体控制导通和绝缘；PMOS/NMOS 组成 CMOS，NAND 与锁存器支撑逻辑处理和 1 bit 记忆。",
    tags: ["半導体", "PMOS", "NMOS", "CMOS", "NAND", "ラッチ回路"]
  },
  {
    id: "m9",
    week: "后续预备",
    title: "网络基础",
    summary: "先放一个预备模块：IP 地址、协议、LAN/WAN、TCP/IP、通信速度和安全通信。等第 9 回讲义来了再替换成老师版本。",
    tags: ["ネットワーク", "TCP/IP", "IPアドレス", "LAN", "プロトコル"]
  },
  {
    id: "m10",
    week: "后续预备",
    title: "数据库与数据管理",
    summary: "先占位整理基本情報常见内容：关系数据库、表、主键、SQL、正規化、事务处理。",
    tags: ["データベース", "SQL", "主キー", "正規化", "トランザクション"]
  },
  {
    id: "m11",
    week: "后续预备",
    title: "信息安全",
    summary: "先占位整理认证、加密、哈希、访问控制、恶意软件、风险管理等基本信息考试高频点。",
    tags: ["情報セキュリティ", "暗号", "認証", "ハッシュ", "アクセス制御"]
  },
  {
    id: "m12",
    week: "后续预备",
    title: "管理与经营基础",
    summary: "先占位整理项目管理、服务管理、系统开发流程、企业活动和经营战略。讲义来了再精修。",
    tags: ["プロジェクト管理", "サービス管理", "システム開発", "経営戦略"]
  }
];

const terms = [
  ["集合", "集合", "把满足条件的对象放在一起。逻辑演算里常把 A、B 看成集合或命题。", "集合/逻辑"],
  ["和集合 A∪B", "并集 / 逻辑和", "属于 A 或属于 B 的元素。逻辑式里常写作 A+B，对应 OR。", "集合/逻辑"],
  ["積集合 A∩B", "交集 / 逻辑积", "同时属于 A 和 B 的元素。逻辑式里常写作 A·B，对应 AND。", "集合/逻辑"],
  ["補集合 Ā", "补集 / 否定", "不属于 A 的元素。逻辑式里对应 NOT。", "集合/逻辑"],
  ["差集合 A-B", "差集", "属于 A 但不属于 B 的元素，可写作 A·B̄。", "集合/逻辑"],
  ["ド・モルガンの法則", "德摩根定律", "NOT(A+B)=NOT(A)·NOT(B)，NOT(A·B)=NOT(A)+NOT(B)，是逻辑式化简的高频规则。", "集合/逻辑"],
  ["bit", "比特", "数据最小单位，只能表示 0 或 1。课件里用开关 ON/OFF 类比。", "进制"],
  ["byte", "字节", "8 bit 的集合。图像、文件、存储容量常用 byte 及其倍数。", "进制"],
  ["2進数", "二进制", "以 0 和 1 表示数，逢 2 进 1，是计算机内部表达数据的基础。", "进制"],
  ["16進数", "十六进制", "以 0-9、A-F 表示数。1 位十六进制正好对应 4 位二进制。", "进制"],
  ["2の補数", "二的补数", "常用的有符号整数表示法。求 -x 时：先写 x 的二进制，按位取反再加 1。", "进制"],
  ["シフト演算", "移位运算", "左移相当于乘 2 的若干次方，右移相当于除 2 的若干次方。", "进制"],
  ["論理積 AND", "逻辑与", "只有输入全为 1 时输出 1。常写作 A·B。", "逻辑回路"],
  ["論理和 OR", "逻辑或", "只要有一个输入为 1 就输出 1。常写作 A+B。", "逻辑回路"],
  ["否定 NOT", "非", "把 0 变成 1，把 1 变成 0。", "逻辑回路"],
  ["バッファ Buffer", "缓冲器", "输出与输入相同，X=A。讲义中作为第一个 MIL 记号示例。", "逻辑回路"],
  ["NAND", "与非", "AND 后再取反，X=NOT(A·B)。它是万能门，可以组合出 NOT、AND、OR 等门。", "逻辑回路"],
  ["NOR", "或非", "OR 后再取反，X=NOT(A+B)。两个输入全为 0 时输出 1。", "逻辑回路"],
  ["排他的論理和 XOR", "异或", "两个输入不同则输出 1，相同则输出 0。", "逻辑回路"],
  ["論理一致 XNOR", "同或", "XOR 的否定，X=NOT(A⊕B)。两个输入相同时输出 1，不同时输出 0。", "逻辑回路"],
  ["MIL記号", "MIL 符号", "逻辑门的图形符号，用来画逻辑回路。", "逻辑回路"],
  ["真理値表", "真值表", "枚举所有输入组合，并写出对应输出，用来验证逻辑式或电路。", "逻辑回路"],
  ["フローチャート", "流程图", "用开始结束、输入输出、处理、判断、循环等符号表达算法流程。", "算法"],
  ["端子", "开始/结束符", "流程图中的圆角符号，表示 start 或 end。", "算法"],
  ["処理", "处理符", "矩形，表示赋值、计算、变量更新等处理。", "算法"],
  ["判断", "判断符", "菱形，表示 yes/no 分支条件。", "算法"],
  ["入出力", "输入输出符", "平行四边形，表示输入或显示输出。", "算法"],
  ["ループ", "循环", "反复执行某段处理，直到判断条件不满足。", "算法"],
  ["スタック", "栈", "后进先出 LIFO 的数据结构。push 放入，pop 取出最上面的元素。", "算法"],
  ["キュー", "队列", "先进先出 FIFO 的数据结构。enqueue 入队，dequeue 出队。", "算法"],
  ["再帰", "递归", "函数在定义中调用自身。题目常考调用次数、栈变化或结束条件。", "算法"],
  ["CPU", "中央处理器", "执行指令的核心，由控制装置、演算装置、寄存器等组成。", "硬件"],
  ["制御装置", "控制装置", "控制取指、译码、数据流向和各部件协作。", "硬件"],
  ["演算装置", "算术逻辑单元", "执行算术运算和逻辑运算，常对应 ALU。", "硬件"],
  ["レジスタ", "寄存器", "CPU 内部极高速的小容量存储，用于暂存指令、地址、数据。", "硬件"],
  ["キャッシュメモリ", "缓存", "位于 CPU 和主存之间的高速存储，用命中率影响实效访问时间。", "硬件"],
  ["主記憶装置 RAM", "主存", "程序运行时主要使用的临时存储，断电后内容通常消失。", "硬件"],
  ["補助記憶装置", "辅助存储", "SSD、HDD 等长期保存数据的装置。", "硬件"],
  ["MIPS", "百万指令每秒", "衡量处理速度的指标，MIPS = 时钟频率 / CPI / 10^6。", "性能"],
  ["CPI", "每指令周期数", "平均执行一条指令需要多少个时钟周期。", "性能"],
  ["実効アクセス時間", "实效访问时间", "考虑缓存命中率后的平均访问时间。", "性能"],
  ["インターフェイス", "接口", "连接两个不同对象的接点或方式。I/O 接口负责设备间数据交换。", "接口"],
  ["USB", "USB 接口", "常用于连接外设、写入程序、供电和数据传输。", "接口"],
  ["HDMI", "HDMI 接口", "常用于把影像输出到显示器，传输带宽高。", "接口"],
  ["Wi-Fi", "无线局域网", "适合较高速无线通信，例如将图像传到 PC。", "接口"],
  ["Bluetooth", "蓝牙", "低功耗短距离无线通信，适合简单命令和近距离设备连接。", "接口"],
  ["稼働率", "可用率", "系统可工作的比例：运行时间 / (运行时间 + 维护时间)。", "性能"],
  ["OS", "操作系统", "管理硬件资源，并为应用程序提供运行环境。", "软件"],
  ["ミドルウェア", "中间件", "位于 OS 和应用之间，提供通用功能。课件例子包括 ROS。", "软件"],
  ["ファイルシステム", "文件系统", "管理文件名、目录、存储位置和访问权限的机制。", "软件"],
  ["半導体", "半导体", "性质介于导体与绝缘体之间，可通过外部刺激控制导电性。", "电路"],
  ["PMOS", "P 型 MOS", "输入为 0 时导通，常用于 CMOS 上拉网络。", "电路"],
  ["NMOS", "N 型 MOS", "输入为 1 时导通，常用于 CMOS 下拉网络。", "电路"],
  ["CMOS", "互补式 MOS", "组合 PMOS 与 NMOS 构成低功耗逻辑电路。", "电路"],
  ["ラッチ回路", "锁存器", "能够保存 1 bit 信息的基本记忆电路。", "电路"]
].map(([jp, cn, desc, category]) => ({ jp, cn, desc, category }));

const problems = [
  ["集合到逻辑", "A∪B 对应 A+B，A∩B 对应 A·B，A 的补集对应 Ā。先看集合图，再写真值表。"],
  ["二进制小数", "把 0<x<1 的十进制小数反复乘 2，取整数部分作为下一位。0.625 会得到 10100000。"],
  ["补数计算", "n 位补数中，负数最高位为 1。求负数时按位取反再加 1，超出 n 位的进位丢弃。"],
  ["移位乘法", "13×6 可拆为 13×(4+2)，也就是左移 2 位的结果加左移 1 位的结果。"],
  ["逻辑式化简", "常用吸收律、分配律、德摩根定律；最后可以用真值表反查是否等价。"],
  ["流程图", "先写输入合法性，再写循环条件和更新步骤。判断框必须有 yes/no 两条路。"],
  ["缓存命中率", "实效访问时间 = 命中率×缓存时间 + 未命中率×主存时间。"],
  ["通信帧率", "每帧 bit 数 = 宽×高×RGB 位数；fps = 带宽 / 每帧 bit 数。"],
  ["中断处理", "多重中断题先画时间轴；中断占用的时间扣掉后，剩下才是主处理时间。"]
];

const lectureQuestions = [
  {
    source: "課題2",
    theme: "进制",
    title: "10进数 5.625 を 2进数に変換",
    body: "10進数の 5.625 を 2進数に変換しなさい。",
    hint: "整数部 5=101，小数部 0.625 は ×2 を反复。",
    answer: "101.101₂"
  },
  {
    source: "課題2",
    theme: "补数",
    title: "2の補数で 4−3",
    body: "2の補数を使って，4−3 の計算を 2進数（5ビット表現）で行いなさい。",
    hint: "4=00100，-3 は 00011 を取反+1。",
    answer: "00100 + 11101 = 00001"
  },
  {
    source: "課題2",
    theme: "进制",
    title: "7÷32 的二进制结果",
    body: "10進数の演算式 7÷32 の結果を 2進数で表現しなさい。",
    hint: "32=2⁵，所以小数点向左移动 5 位。",
    answer: "0.00111₂"
  },
  {
    source: "課題2",
    theme: "进制",
    title: "16进数 2A.4C 转 2进数",
    body: "16進数の 2A.4C を 2進数に変換せよ。",
    hint: "1 位 16 进制对应 4 bit。",
    answer: "00101010.01001100₂"
  },
  {
    source: "課題2",
    theme: "移位",
    title: "13×6 的移位说明",
    body: "10進数の演算式 13×6 をシフト演算で説明せよ。",
    hint: "6=4+2，分别是左移 2 位和左移 1 位。",
    answer: "13<<2 と 13<<1 を足す。1101→110100 + 11010 = 1001110₂"
  },
  {
    source: "課題2",
    theme: "溢出",
    title: "8 bit 无符号整数 200+100",
    body: "8ビット符号なし整数で 200+100 を計算せよ。",
    hint: "真实结果 300 超过 255，8 bit 中高位被舍弃。",
    answer: "300 mod 256 = 44 = 00101100₂"
  },
  {
    source: "課題2",
    theme: "误差",
    title: "0.1 显示成 0.098 的原因",
    body: "あるPCのプログラムで 0.1₁₀ を小数点以下3桁で表示すると 0.098 となった。この原因を考える。",
    hint: "0.1 的二进制小数是循环小数，有限 bit 表示时会截断。",
    answer: "0.1₁₀≈0.00011001₂（8 bit）≈0.09765625，所以显示约 0.098。"
  },
  {
    source: "課題2",
    theme: "线性映射",
    title: "电机指令电压 3.6V 的 bit 列",
    body: "モータドライバは 0.0V→0000，6.0V→1111。モータへ 3.6V を与えたい場合，出力すべきビット列を求めよ。",
    hint: "4 bit 最大值 15，线性映射：3.6/6.0×15。",
    answer: "9 に相当するので 1001（丸め规则若另有指定则按题意）。"
  },
  {
    source: "課題3",
    theme: "逻辑式",
    title: "論理式を簡潔に示す",
    body: "以下の式を式変形して簡潔に示せ。例： (A+B·C)·(A+C·D)·(A+B+C) など。",
    hint: "吸收律、分配律、德摩根定律；最后用真值表检验。",
    answer: "网站第三回公式区可用于推导；具体小题按式子逐步化简。"
  },
  {
    source: "課題3",
    theme: "NAND",
    title: "NANDゲートのみで各論理ゲート",
    body: "NANDゲートのみで NOT / AND / OR など各論理ゲートを表せ。",
    hint: "A NAND A = NOT A。",
    answer: "NOT: A NAND A。AND: (A NAND B) NAND (A NAND B)。OR: (A NAND A) NAND (B NAND B)。"
  },
  {
    source: "課題3",
    theme: "加算/补数回路",
    title: "1 bit 加算回路と 4 bit 符号反転回路",
    body: "問題3: 1. 2つの1 bitの整数の足し算を行う論理回路を作れ。2. 符号付き4 bitの正の整数の -1 倍を2の補数表現で表す論理回路を作れ。",
    hint: "1 bit 加算は半加算器：和は XOR，桁上がりは AND。-1倍は各 bit 反転後 +1。",
    answer: "半加算器: S=A XOR B, C=A AND B。4 bit 符号反転: NOT 后に 0001 を加算する 2の補数回路。"
  },
  {
    source: "課題4",
    theme: "流程图",
    title: "流程图结果 a",
    body: "次のフローチャートの示すアルゴリズムの結果 a は？ ただし a%2 は a を2で割った余り。",
    hint: "先把每次 a 的变化写成表格，再看循环终止条件。",
    answer: "原图在 PDF 中，网站先保留题目与解法模板。"
  },
  {
    source: "課題4",
    theme: "流程图",
    title: "二进制小数 8 bit 输出流程图",
    body: "0より大きく1より小さい10進小数が入力されたとき，その2進小数の小数部分を8ビットで出力するフローチャートをかけ。例：0.625→10100000。",
    hint: "合法性检查后，循环 8 次：x*=2，若 x>=1 输出1并 x-=1，否则输出0。",
    answer: "输入检查 → i=1 → x=x×2 → 判断 x>=1 → 输出 bit → i 更新 → i<=8 循环。"
  },
  {
    source: "課題4",
    theme: "栈/递归",
    title: "3个栈和再帰函数 g()",
    body: "スタックA=[1,2,3]，B=[10,20,30]，C=[100,200,300]。再帰関数 g() を呼び出した後の Stack A を答える。",
    hint: "栈顶在右侧；每次 push/pop 都写出 A/B/C 状态。",
    answer: "需要结合 PDF 中函数定义逐步追踪。"
  },
  {
    source: "課題5",
    theme: "CPU性能",
    title: "最大クロック周波数",
    body: "入力から出力まで最大 1.2ns かかる論理回路を CPU に組み込む場合，最大クロック周波数は何 GHz 以下か。",
    hint: "周期 T ≥ 遅延時間。f=1/T。",
    answer: "1 / 1.2ns = 0.833...GHz → 約 0.8GHz（小数第2位四捨五入の指定に注意）。"
  },
  {
    source: "課題5",
    theme: "CPU性能",
    title: "MIPS 値",
    body: "クロック周波数 4.0GHz，平均 CPI 2.5 のプロセッサの MIPS値を求めよ。",
    hint: "MIPS = clock / CPI / 10⁶。",
    answer: "4.0×10⁹ / 2.5 / 10⁶ = 1600 MIPS"
  },
  {
    source: "課題5",
    theme: "缓存",
    title: "实效访问时间 19ns 以下",
    body: "キャッシュ 10ns，主記憶 100ns。このシステムの実効アクセス時間を 19ns 以下にするには，ヒット率を最低何％以上にする必要があるか。",
    hint: "EAT = h×10 + (1-h)×100 ≤ 19。",
    answer: "100 - 90h ≤ 19 → h ≥ 0.9，所以 90%以上。"
  },
  {
    source: "課題5",
    theme: "CPU性能",
    title: "命令构成から実効 MIPS",
    body: "問題④: 演算命令が全体の60%で1命令2クロック，メモリアクセス命令が40%で1命令5クロック。クロック周波数3.2GHzで動作させたとき，実効性能は何MIPSか。",
    hint: "平均 CPI = 0.6×2 + 0.4×5。",
    answer: "平均CPI=3.2。3.2GHz / 3.2 / 10^6 = 1000 MIPS。"
  },
  {
    source: "課題5",
    theme: "缓存",
    title: "A-D を実効アクセス時間が短い順に並べる",
    body: "問題⑤: A～Dを，主記憶の実効アクセス時間が短い順に並べよ。",
    hint: "各選択肢の缓存时间、主存时间、命中率を EAT=h×cache+(1-h)×memory に代入して比较。",
    answer: "PDF抽出では A-D の表が画像として落ちているため，表を見ながら EAT を計算して短い順に並べる。"
  },
  {
    source: "課題5",
    theme: "缓存",
    title: "缓存高速化倍率",
    body: "主記憶がキャッシュより 20倍遅い。ヒット率 95% のとき，キャッシュなしと比較して何倍高速か。",
    hint: "缓存时间设为 1，主存为 20。EAT=0.95×1+0.05×20。",
    answer: "EAT=1.95，缓存なし=20，20/1.95≈10.26 倍。"
  },
  {
    source: "課題6",
    theme: "接口",
    title: "用途に適した入出力インターフェース",
    body: "カメラ映像を遠隔PCへ送信、スマホからロボットへ無線コマンド、PCからロボット内コンピュータへ書込み、カメラ映像をモニタ表示。HDMI / USB / Wi-Fi / Bluetooth を対応させる。",
    hint: "高速无线图像=Wi-Fi，近距離命令=Bluetooth，書込み=USB，モニタ表示=HDMI。",
    answer: "Wi-Fi / Bluetooth / USB / HDMI"
  },
  {
    source: "課題6",
    theme: "通信",
    title: "1920×1080 RGB 8bit の最大 fps",
    body: "画像サイズ 1920×1080 pixel，RGB各8bit。Bluetooth 2Mbps，Wi-Fi 100Mbps，HDMI 10Gbps では理論上毎秒何フレーム送れるか。",
    hint: "1帧 bit = 1920×1080×24。",
    answer: "约 Bluetooth 0.04fps，Wi-Fi 2.01fps，HDMI 200.94fps。"
  },
  {
    source: "課題6",
    theme: "稼働率",
    title: "稼働率を 1.25 倍",
    body: "稼働時間 1500時間，メンテナンス時間 500時間のシステムの稼働率を1.25倍向上させるには，メンテナンス時間を何時間にすればいいか。",
    hint: "当前 1500/(1500+500)=0.75。目标 0.9375。",
    answer: "1500/(1500+x)=0.9375 → x=100時間。"
  },
  {
    source: "課題6",
    theme: "稼働率",
    title: "LAN 全体システムの稼働率",
    body: "問題④: 1台のサーバ，3台のクライアント，2台のプリンタがLANで接続されている。この全体システムの稼働率を式で表せ。",
    hint: "直列部分は掛け算，並列でどれか1台動けばよい部分は 1-(全部故障する確率)。図の条件を式に写す。",
    answer: "図の接続関係に依存。基本形: サーバ稼働率 × LAN稼働率 × クライアント側条件 × プリンタ側条件。"
  },
  {
    source: "課題7",
    theme: "OS",
    title: "用途に合う OS",
    body: "1ms周期の小型移動ロボット、ROS/AI研究室ロボット、手術支援ロボット、大学PC、クリエイター向けPC に Windows/QNX/macOS/Linux系/FreeRTOS を対応させる。",
    hint: "低功耗リアルタイム=FreeRTOS，研究開発=Linux，安全リアルタイム=QNX，大学PC=Windows，制作=macOS。",
    answer: "FreeRTOS / Linux系 / QNX / Windows / macOS"
  },
  {
    source: "課題7",
    theme: "バッファ",
    title: "画像バッファが満杯になるまで",
    body: "30fpsで5MB画像を取得，RAMバッファ50MB，処理25ms，SSD保存10ms。バッファが満杯になるまで何秒か。",
    hint: "1帧到达间隔 33.3ms，处理+保存 35ms，差分が蓄積する。",
    answer: "1帧约 1.67ms 分たまる。50MB/5MB=10帧分なので約 10/(30-28.57)=7秒程度。"
  },
  {
    source: "課題7",
    theme: "中断",
    title: "多重割込みとメイン処理時間",
    body: "メイン処理と割込みA/Bがあり，多重割込み許可。0msから5msまでのメイン処理が利用できるCPU時間を求める。",
    hint: "时间轴を描き，A/B の処理区間を塗りつぶす。",
    answer: "原图の発生タイミング表が必要。网站先保留解法模板。"
  },
  {
    source: "課題7",
    theme: "スプーリング",
    title: "ジョブA-Dの印刷完了時刻",
    body: "ジョブA-Dを多重度1で実行し，優先順位 A>B>C>D，スプーリング機能が1台のプリンタで逐次印刷する。全印刷完了は何秒後か。",
    hint: "CPU実行の完了順とプリンタ待ち行列を別々の時間軸で管理。",
    answer: "A:実行50/印刷50，B:30/40，C:20/30，D:40/20。優先順に実行し印刷待ちを追跡。"
  },
  {
    source: "課題7",
    theme: "処理方式",
    title: "インタプリタ方式とコンパイラ方式",
    body: "問題⑤: プログラムを200回修正して動作確認する開発中と，完成後に1秒間に500回実行してロボットを制御する場合，インタプリタ方式Aとコンパイラ方式Bのどちらが適するか。",
    hint: "開発中は修正ごとにコンパイル時間15sが効く。完成後は1回あたり実行時間が重要。",
    answer: "開発中: Aが効率的。完成後: Bが適する。500回実行ならAは900ms，Bは50ms程度で制御周期に余裕。"
  },
  {
    source: "課題8",
    theme: "CMOS",
    title: "CMOS NAND の確認",
    body: "PMOS/NMOS の導通条件から，提示された CMOS が NAND の働きをすることを確認せよ。",
    hint: "P は入力0で導通，N は入力1で導通。A/B の4パターンで X を確認。",
    answer: "A=B=1 のときだけ X=0，それ以外は X=1。NAND の真理値表。"
  },
  {
    source: "課題8",
    theme: "記憶回路",
    title: "1 bit 情報を記憶する回路",
    body: "D がセットされている状態で，S の入力によって Q がどのように変化するか確認せよ。",
    hint: "S=0 では保存，S=1 では D が Q に反映されるタイプとして追う。",
    answer: "S=0 で保持，S=1 で D を取り込む，という観点で状態遷移を説明。"
  },
  {
    source: "課題8",
    theme: "復習希望",
    title: "次週振り返りたい分野",
    body: "問題③: これまでの授業内容で次週の授業内で振り返りたい分野は？ 例: 2進数、10進数から2進数への変換方法、問題追加など。",
    hint: "苦手分野を具体的に書く。例: 補数、論理回路、フローチャート、CPU性能計算。",
    answer: "自由回答。試験対策としては『2進数・補数・論理回路・フローチャート』を優先候補にする。"
  },
  {
    source: "練習問題",
    theme: "补数",
    title: "6 bit で -7",
    body: "10進数の 7 を 6ビットで表し，2の補数表現で負の数 -7 に変換しなさい。",
    hint: "000111 → 取反 111000 → +1。",
    answer: "111001"
  },
  {
    source: "練習問題",
    theme: "补数",
    title: "11110110 を 10进数へ",
    body: "8ビットの2の補数表現で 11110110 は10進数でいくつか。",
    hint: "最高位1なので负数。取反+1 得到绝对值。",
    answer: "-10"
  },
  {
    source: "練習問題",
    theme: "移位",
    title: "12 左移 1 bit",
    body: "10進数 12 を 2進数8ビットに直し，左に1ビットシフトしたとき，値は10進数でいくつになるか。",
    hint: "左移 1 位相当于乘 2。",
    answer: "24"
  },
  {
    source: "練習問題",
    theme: "移位",
    title: "自然数 n を 34 倍するシフト演算",
    body: "ある2進数の自然数 n を34倍する場合，どのようなシフト演算がされるか。",
    hint: "34=32+2。",
    answer: "nを5つ左にシフトしたものと，1つ左にシフトしたものを足す。"
  },
  {
    source: "練習問題",
    theme: "逻辑式",
    title: "論理式を簡単にせよ",
    body: "講義練習問題：論理式を簡単にせよ。例題中に B·C、A+C などの答えが示されている。",
    hint: "用吸收律和分配律。",
    answer: "練習問題例：(1) B·C，(2) A+C。"
  },
  {
    source: "練習問題",
    theme: "逻辑式",
    title: "XをA,B,Cの論理式で表す",
    body: "XをA,B,Cの論理式で簡単に表せ。使わないものがあってもよい。",
    hint: "図から X が 1 になる入力条件を読み取り，関係ない変数を消す。",
    answer: "X = B + C"
  },
  {
    source: "練習問題",
    theme: "CMOS/論理回路",
    title: "PMOS/NMOS 回路の真理値表と種類",
    body: "PMOS/NMOS で構成された回路について，真理値表を書き，何の論理回路の構成か求めよ。",
    hint: "PMOS は入力0で導通，NMOS は入力1で導通。A/B の4通りで X を追う。",
    answer: "NOR回路。"
  },
  {
    source: "練習問題",
    theme: "記憶回路",
    title: "Qn が保存されている回路の次状態",
    body: "Qに値 Qn が保存されているとき，入力A,Bに対する出力 Qn+1 を求め，真理値表をかけ。",
    hint: "A,B の4通りを順に調べ，保持・0・1 のどれになるかを見る。",
    answer: "講義抽出では表が AB=00:Qn, 01:0, 10:Qn, 11:1 の形で示されている。"
  },
  {
    source: "練習問題",
    theme: "队列/栈",
    title: "キューとスタックの出力文字列",
    body: "空のキューQと空のスタックSがある。QにA,B,C,Dを順にenqueueし，Qから2回dequeueした値をSにpushし，Sから1回popした値をQにenqueueし，Qが空になるまでdequeueして出力する。出力文字列は？",
    hint: "Q は先入先出，S は后入先出。状態を逐次写す。",
    answer: "C,D,B"
  },
  {
    source: "練習問題",
    theme: "递归",
    title: "再帰関数 G(4) の呼出し回数",
    body: "G(0)=1, G(1)=1, G(n)=G(n-1)+G(n-2) (n≥2)。G(4)を呼び出したとき，関数Gは合計何回呼び出されるか。ただし計算結果を保存して再利用しない。",
    hint: "呼出し木を書く。G(4)→G(3)+G(2) と分岐。",
    answer: "9回"
  },
  {
    source: "練習問題",
    theme: "流程图",
    title: "最大公約数フローチャート",
    body: "a,b を入力し，最大公約数を求めるフローチャートを作成しなさい。",
    hint: "ユークリッド互除法：r=a%b，r=0なら b，それ以外は a=b,b=r。",
    answer: "start→a,b入力→r=a%b→r=0? yes: b出力/end no: a=b,b=r に戻る。"
  },
  {
    source: "練習問題",
    theme: "中断",
    title: "割り込み時のレジスタ保存・復帰オーバーヘッド",
    body: "CPU内部の16個のレジスタをすべてスタックに保存・復帰する。CPU 10MHz，レジスタ1個あたり保存2クロック，復帰2クロック。3つの割り込みが連続して重なる場合，純粋な割り込み処理時間以外に合計何msの遅延が発生するか。",
    hint: "1割込みあたり 16×(2+2)=64クロック。3回分で192クロック。10MHz は 1クロック=0.1µs。",
    answer: "192クロック ×0.1µs = 19.2µs = 0.0192ms。"
  },
  {
    source: "復習問題",
    theme: "补数",
    title: "問題① 8 bit で -5",
    body: "10進数の5を8ビットで表し，2の補数表現で負の数である「-5」に変換しなさい。",
    hint: "5=00000101。全部反転して 11111010，さらに 1 を加える。",
    answer: "11111011"
  },
  {
    source: "復習問題",
    theme: "移位",
    title: "問題② 8 bit シフト演算",
    body: "1. 10進数の6を2進数8ビットに直し，左に2ビットシフトしたとき，値は10進数でいくつになるか。2. 10進数の8を2進数8ビットに直し，右に2ビットシフトしたとき，値は10進数でいくつになるか。",
    hint: "左2ビットは ×4，右2ビットは ÷4。溢れたビットや空いたビットは考えない。",
    answer: "1. 6×4=24。2. 8÷4=2。"
  },
  {
    source: "復習問題",
    theme: "集合/逻辑",
    title: "問題③ ベン図で指定領域を塗る",
    body: "AとBとCの集合を円で表す。指定された領域を塗れ。基礎: AとBの排他的論理和。基本: BとCの論理和とAの論理積。",
    hint: "排他的論理和は A と B のどちらか一方だけ。『BとCの論理和とAの論理積』は A·(B+C)。",
    answer: "基礎: (A·NOT(B)) + (NOT(A)·B)。基本: A·(B+C)。"
  },
  {
    source: "復習問題",
    theme: "逻辑式",
    title: "問題④ 論理式を簡単にせよ",
    body: "次の論理式を簡単にせよ。基礎: A + A·B。基本: A + NOT(A)·B。応用: (A+B)·(A+C)+B·C など，講義の論理代数公式を用いる形式。",
    hint: "吸収律 A+A·B=A，分配律，ド・モルガンの法則を使う。",
    answer: "基礎: A。基本: A+B。応用は式の画像部分が抽出しきれていないため，講義PDFを見ながら公式で簡約。"
  },
  {
    source: "復習問題",
    theme: "逻辑回路",
    title: "問題⑤ A=1, B=0 の回路出力",
    body: "A=1，B=0 のとき，各論理回路の出力 X を求めよ。基礎・基本の2つの回路図が示されている。",
    hint: "回路図のゲートを左から順に評価する。AND/OR/NOT/NAND/NOR/XOR の真理値表を使う。",
    answer: "PDF抽出では回路図の細部が落ちているため，講義図を見ながら各ゲートを順に計算。"
  },
  {
    source: "復習問題",
    theme: "MOSFET",
    title: "問題⑥ PMOS/NMOS の出力",
    body: "図の PMOS/NMOS 回路について，(1) A=0 のときの X は？ (2) A=1 のときの X は？",
    hint: "PMOS は入力0で導通，NMOS は入力1で導通。上が 1，下が 0 に接続されているインバータとして考える。",
    answer: "A=0 のとき X=1。A=1 のとき X=0。NOT 回路。"
  },
  {
    source: "復習問題",
    theme: "記憶回路",
    title: "問題⑦ Q が 1 を保持している回路",
    body: "Qが1を保持しているとき，(1) A=1，B=0を入力するとQはいくつになる？ (2) A=0，B=1を入力するとQはいくつになる？",
    hint: "順序論理回路は過去の状態 Q を使う。NAND/NOT の出力を順に追う。",
    answer: "図の接続に依存。講義図を見ながら Q=1 から次状態を追跡する。"
  },
  {
    source: "復習問題",
    theme: "栈",
    title: "問題⑧ スタック操作",
    body: "スタックに対して「プッシュ1 → プッシュ2 → ポップ → プッシュ3 → ポップ」の順に操作を行った。ポップによって取り出された値を左から順に並べなさい。",
    hint: "スタックは LIFO。最後に入れたものが先に出る。",
    answer: "2, 3"
  },
  {
    source: "復習問題",
    theme: "递归",
    title: "問題⑨ 階乗 F(4) の呼出し回数",
    body: "階乗を計算する再帰関数 F(n) を考える。n=1 のとき 1 を返し，それ以外では n×F(n-1) を計算する。F(4) を最初に呼び出してから処理完了まで，関数は合計何回呼び出されるか。",
    hint: "F(4)→F(3)→F(2)→F(1) と一直線に呼び出す。",
    answer: "4回"
  },
  {
    source: "復習問題",
    theme: "流程图",
    title: "問題⑩ i を 0 から 9 まで出力するフローチャート",
    body: "変数 i の初期値を0とし，i が10以上になるまで処理を繰り返す。i<10なら現在の i を出力し，i に1を加算して繰り返す。10以上になったら終了するフローチャートを表したい。",
    hint: "start → i=0 → i<10? → yes: i出力 → i=i+1 → 判断へ戻る。no: end。",
    answer: "端子 start，処理 i=0，判断 i<10，yes 側で出力 i と i=i+1，判断へ戻る。no 側で end。"
  },
  {
    source: "復習問題",
    theme: "中断",
    title: "問題⑪ 多重割り込み禁止時のメイン処理時間",
    body: "メイン処理と割り込みA/Bがある。多重割り込みは禁止。割り込み中に別の割り込みが発生した場合は待たされ，複数待ちなら優先度の高い方を先に実行する。0〜5ms の間にメイン処理が利用できる CPU 時間を求めよ。条件: Aは優先度高・処理時間1.0ms，Bは優先度低・処理時間1.5ms。",
    hint: "0〜5ms の時間軸を描く。割り込み発生タイミングを置き，処理中に来た割り込みはキューで待機させる。",
    answer: "発生タイミング図の細部が画像として抽出されているため，PDFの時間軸を見ながら A/B の処理区間を塗り，残りをメイン処理時間として数える。"
  }
];

const extraQuestions = [
  ["类似题：补数", "8 bit 2の補数で -23 を表せ。答え：11101001。"],
  ["类似题：缓存", "キャッシュ 5ns，主記憶 80ns，ヒット率 92%。実効アクセス時間は？ 答え：11.0ns。"],
  ["类似题：通信", "1280×720 RGB 24bit，50Mbps で最大 fps は？ 答え：約2.26fps。"],
  ["类似题：逻辑", "X=(A+B)·(A+C) を簡単化せよ。答え：A+B·C。"],
  ["IPA 官方", "基本情報技術者的公开题和样本题在 IPA 官网提供。网站底部放了入口，建议优先做科目A样本题。"]
];

let activeQuestionSource = "全部";

const flowSymbols = [
  ["terminal", "端子", "开始 / 结束"],
  ["process", "处理", "计算、代入、更新"],
  ["io", "输入输出", "读取或显示数据"],
  ["decision", "判断", "条件分支 yes/no"],
  ["predefined", "定义済み処理", "子程序 / 函数调用"],
  ["document", "文档", "报表、打印结果"],
  ["data", "数据", "文件或存储数据"],
  ["connector", "连接子", "跳转到另一处流程"]
];

let activeCategory = "全部";

function $(id) {
  return document.getElementById(id);
}

function normalize(text) {
  return String(text).toLowerCase().replace(/\s+/g, "");
}

function renderNav() {
  $("moduleNav").innerHTML = modules.map(m => (
    `<button data-target="${m.id}"><strong>${m.week}</strong><br>${m.title}</button>`
  )).join("");
  document.querySelectorAll("#moduleNav button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelector(`[data-module="${btn.dataset.target}"]`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderModules(query = "") {
  const q = normalize(query);
  const filtered = modules.filter(m => normalize([m.week, m.title, m.summary, ...m.tags].join(" ")).includes(q));
  $("moduleCards").innerHTML = filtered.map(m => `
    <article class="module-card" data-module="${m.id}">
      <div class="module-title">
        <h3>${m.title}</h3>
        <strong>${m.week}</strong>
      </div>
      <p>${m.summary}</p>
      <div class="tag-row">${m.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    </article>
  `).join("");
  $("resultCount").textContent = `显示 ${filtered.length} / ${modules.length} 个章节`;
}

function renderVisuals(query = "") {
  const q = normalize(query);
  const filtered = modules.filter(m => normalize([m.week, m.title, m.summary, ...m.tags].join(" ")).includes(q));
  $("visualCards").innerHTML = filtered.map(m => `
    <article class="visual-card ${["m2", "m3", "m4", "m8"].includes(m.id) ? "visual-card-large" : ""}" data-module="${m.id}">
      <header>
        <div>
          <p class="eyebrow">${m.week}</p>
          <h3>${m.title}</h3>
        </div>
      </header>
      ${visualHtml(m.id)}
    </article>
  `).join("");
}

function renderFilters() {
  const cats = ["全部", ...new Set(terms.map(t => t.category))];
  $("categoryFilters").innerHTML = cats.map(c => `<button class="${c === activeCategory ? "active" : ""}" data-cat="${c}">${c}</button>`).join("");
  document.querySelectorAll("#categoryFilters button").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.cat;
      renderFilters();
      renderGlossary($("searchInput").value);
    });
  });
}

function renderGlossary(query = "") {
  const q = normalize(query);
  const filtered = terms.filter(t => {
    const matchCat = activeCategory === "全部" || t.category === activeCategory;
    const matchQuery = normalize(`${t.jp}${t.cn}${t.desc}${t.category}`).includes(q);
    return matchCat && matchQuery;
  });
  $("glossary").innerHTML = filtered.map(t => `
    <article class="term-card">
      <header>
        <div>
          <div class="jp">${t.jp}</div>
          <div class="cn">${t.cn}</div>
        </div>
        <span class="tag">${t.category}</span>
      </header>
      <p>${t.desc}</p>
    </article>
  `).join("") || `<p class="note">没有找到匹配项，试试日文、中文或英文缩写。</p>`;
}

function renderProblems() {
  $("problemBank").innerHTML = problems.map(([title, desc]) => `
    <article class="problem-card">
      <strong>${title}</strong>
      <p>${desc}</p>
    </article>
  `).join("");
}

function renderQuestionFilters() {
  const sources = ["全部", ...new Set(lectureQuestions.map(q => q.source))];
  $("questionFilters").innerHTML = sources.map(source => `
    <button class="${source === activeQuestionSource ? "active" : ""}" data-source="${source}">${source}</button>
  `).join("");
  document.querySelectorAll("#questionFilters button").forEach(btn => {
    btn.addEventListener("click", () => {
      activeQuestionSource = btn.dataset.source;
      renderQuestionFilters();
      renderQuestionList($("searchInput").value);
    });
  });
}

function renderQuestionList(query = "") {
  const q = normalize(query);
  const filtered = lectureQuestions.filter(item => {
    const bySource = activeQuestionSource === "全部" || item.source === activeQuestionSource;
    const byQuery = normalize(`${item.source}${item.theme}${item.title}${item.body}${item.hint}${item.answer}`).includes(q);
    return bySource && byQuery;
  });
  $("questionList").innerHTML = filtered.map((item, index) => `
    <article class="question-card">
      <div class="question-meta">
        <span>${item.source}</span>
        <span>${item.theme}</span>
        <span>No.${index + 1}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
      <details>
        <summary>提示 / 答案</summary>
        <div class="qa-detail">
          <strong>提示</strong>
          <p>${item.hint}</p>
          <strong>答案</strong>
          <p>${item.answer}</p>
        </div>
      </details>
    </article>
  `).join("") || `<p class="note">没有找到匹配题目。</p>`;
}

function renderExtraPractice() {
  $("extraPractice").innerHTML = extraQuestions.map(([title, desc]) => `
    <article class="problem-card">
      <strong>${title}</strong>
      <p>${desc}</p>
    </article>
  `).join("");
}

function renderFlowSymbols() {
  $("flowSymbolGrid").innerHTML = flowSymbols.map(([shape, title, desc]) => `
    <div class="symbol-item">
      <div class="mini-flow ${shape}">${shape === "decision" ? "" : title}</div>
      <strong>${title}</strong>
      <span>${desc}</span>
    </div>
  `).join("");
}

function visualHtml(id) {
  const visuals = {
    m1: `
      <div class="system-map">
        <div>环境</div><div>センサ<br><span>感知</span></div><div>コンピュータ<br><span>判断/记忆</span></div><div>アクチュエータ<br><span>执行</span></div><div>机器人动作</div>
      </div>
      <p class="note">机器人系统不是单个机械臂，而是“环境→传感→处理→执行→环境变化”的闭环。</p>
    `,
    m2: `
      <div class="m2-atlas">
        <section>
          <h4>集合と論理の入口</h4>
          <div class="venn-mini-row venn-mini-row-wide">
            ${vennSvg("A", "集合 A", "a")}
            ${vennSvg("A+B", "和集合 / 并集 / OR", "union")}
            ${vennSvg("A·B", "積集合 / 交集 / AND", "inter")}
            ${vennSvg(`A·<span class="over">B</span>`, "差集合 / A 且非 B", "diff")}
          </div>
        </section>
        <section>
          <h4>データ単位</h4>
          <div class="unit-board">
            <div><strong>bit</strong><span>0 或 1</span></div>
            <div><strong>byte</strong><span>8 bit</span></div>
            <div><strong>hex 1位</strong><span>4 bit</span></div>
            <div><strong>RGB 1 pixel</strong><span>24 bit</span></div>
          </div>
        </section>
      </div>
      <div class="conversion-board">
        <div>
          <strong>10進整数 → 2進数</strong>
          <span>2で割り，余りを下から読む</span>
        </div>
        <div>
          <strong>2進数 → 10進数</strong>
          <span>各桁 × 2ⁿ を足す</span>
        </div>
        <div>
          <strong>16進数 → 2進数</strong>
          <span>1桁を4bitに置き換える</span>
        </div>
        <div>
          <strong>小数 → 2進小数</strong>
          <span>×2して整数部を並べる</span>
        </div>
      </div>
      <div class="bit-ladder">
        <div><strong>2の補数</strong><span>取反 + 1</span></div>
        <div><strong>論理左シフト</strong><span>×2ⁿ</span></div>
        <div><strong>論理右シフト</strong><span>÷2ⁿ</span></div>
        <div><strong>丸め誤差</strong><span>有限 bit で近似</span></div>
      </div>
    `,
    m3: `
      <div class="lecture-flow">
        <div><strong>集合</strong><span>ベン図</span></div>
        <div><strong>論理演算</strong><span>真/偽、0/1</span></div>
        <div><strong>論理代数</strong><span>公式で化简</span></div>
        <div><strong>MIL記号</strong><span>逻辑回路图</span></div>
      </div>
      <div class="venn-mini-row">
        ${vennSvg("A", "集合 A", "a")}
        ${vennSvg(`<span class="over">A</span>`, "補集合 / 补集 / NOT", "not")}
        ${vennSvg("A+B", "和集合 / 并集 / OR", "union")}
        ${vennSvg("A·B", "積集合 / 交集 / AND", "inter")}
      </div>
      <div class="priority-board">
        <div><strong>四则演算</strong><span>() → ×÷ → +−</span></div>
        <div><strong>論理演算</strong><span>NOT → AND → OR</span></div>
        <div><strong>例题 X=A+B·C</strong><span>步骤1: B AND C / 步骤2: OR A</span></div>
      </div>
      <div class="law-strip">
        <span>交换律: A·B=B·A / A+B=B+A</span>
        <span>吸收律: A·B=B, A+B=A (B⊂A)</span>
        <span>同一律: A·1=A, A+0=A</span>
        <span>补元: A·Ā=0, A+Ā=1</span>
        <span>结合律: (A+B)+C=A+B+C</span>
        <span>分配律: A·(B+C)=A·B+A·C</span>
        <span>德摩根: <span class="over">A·B</span>=<span class="over">A</span>+<span class="over">B</span> / <span class="over">A+B</span>=<span class="over">A</span>·<span class="over">B</span></span>
      </div>
      <div class="mil-grid">
        ${milCard("BUFFER", "缓冲器", "X=A", "buffer", [[0,0],[1,1]])}
        ${milCard("NOT", "逻辑否定 / 非", "X=Ā", "not", [[0,1],[1,0]])}
        ${milCard("AND", "論理積 / 逻辑与", "X=A·B", "and", [[0,0,0],[0,1,0],[1,0,0],[1,1,1]])}
        ${milCard("NAND", "否定論理積 / 与非", `X=<span class="over">A·B</span>`, "nand", [[0,0,1],[0,1,1],[1,0,1],[1,1,0]])}
        ${milCard("OR", "論理和 / 逻辑或", "X=A+B", "or", [[0,0,0],[0,1,1],[1,0,1],[1,1,1]])}
        ${milCard("NOR", "否定論理和 / 或非", `X=<span class="over">A+B</span>`, "nor", [[0,0,1],[0,1,0],[1,0,0],[1,1,0]])}
        ${milCard("XOR", "排他的論理和 / 异或", "X=A⊕B", "xor", [[0,0,0],[0,1,1],[1,0,1],[1,1,0]])}
        ${milCard("XNOR", "論理一致 / 同或", `X=<span class="over">A⊕B</span>`, "xnor", [[0,0,1],[0,1,0],[1,0,0],[1,1,1]])}
      </div>
      <div class="nand-build">
        <div><strong>NAND only</strong><span>どんな論理回路も NAND のみで構成できる</span></div>
        <div><strong>NOT</strong><span>A NAND A = Ā</span></div>
        <div><strong>AND</strong><span>(A NAND B) NAND (A NAND B)</span></div>
        <div><strong>OR</strong><span>(A NAND A) NAND (B NAND B)</span></div>
      </div>
    `,
    m4: `
      <div class="flowchart-wide">
        <div class="fc terminal">start</div><div class="fc arrow">→</div>
        <div class="fc io">输入 a,b</div><div class="fc arrow">→</div>
        <div class="fc process">r = a % b</div><div class="fc arrow">→</div>
        <div class="fc decision"></div><div class="fc arrow">yes →</div>
        <div class="fc terminal">end</div>
      </div>
      <div class="ds-board">
        <div><strong>Stack</strong><span>[底, 1, 2, 3, 上]</span><em>pop 先取 3</em></div>
        <div><strong>Queue</strong><span>[前, A, B, C, 后]</span><em>dequeue 先取 A</em></div>
      </div>
    `,
    m5: `
      <div class="cpu-cycle">
        <div>取指<br><span>Fetch</span></div><div>译码<br><span>Decode</span></div><div>执行<br><span>Execute</span></div><div>写回<br><span>Write back</span></div>
      </div>
      <div class="memory-pyramid">
        <div>寄存器<br><span>最快 / 最小</span></div>
        <div>缓存 Cache</div>
        <div>主存 RAM</div>
        <div>SSD / HDD<br><span>最慢 / 最大</span></div>
      </div>
    `,
    m6: `
      <div class="interface-map">
        <div class="device">カメラ</div><div class="wire wifi">Wi-Fi<br>图像到 PC</div><div class="device">PC</div>
        <div class="device">スマホ</div><div class="wire bt">Bluetooth<br>近距离命令</div><div class="device">Robot</div>
        <div class="device">PC</div><div class="wire usb">USB<br>写入程序</div><div class="device">Board</div>
        <div class="device">Camera</div><div class="wire hdmi">HDMI<br>显示影像</div><div class="device">Monitor</div>
      </div>
    `,
    m7: `
      <div class="os-stack">
        <div>应用程序<br><span>报告、会议、视频编辑</span></div>
        <div>ミドルウェア<br><span>ROS / 通用功能</span></div>
        <div>OS<br><span>Windows / Linux / macOS / QNX / FreeRTOS</span></div>
        <div>ハードウェア<br><span>CPU / RAM / SSD / I/O</span></div>
      </div>
      <p class="note">不同 OS 的选择题看目标：实时控制重视确定性，开发研究重视生态，创作重视应用环境。</p>
    `,
    m8: `
      <div class="cmos-board">
        <div class="rail">VDD</div>
        <div class="mos p">PMOS<br><span>输入 0 导通</span></div>
        <div class="node">出力 X</div>
        <div class="mos n">NMOS<br><span>输入 1 导通</span></div>
        <div class="rail">GND</div>
      </div>
      <div class="latch-board">
        <div>D</div><div>Set / Enable</div><div>Q</div><div>Q̄</div>
      </div>
      <p class="note">CMOS 通过 PMOS 上拉、NMOS 下拉决定输出；锁存器用反馈保存 1 bit。</p>
    `,
    m9: `
      <div class="interface-map">
        <div class="device">Client</div><div class="wire wifi">TCP/IP<br>分组通信</div><div class="device">Server</div>
        <div class="device">LAN</div><div class="wire usb">Router<br>网络间转发</div><div class="device">WAN</div>
        <div class="device">DNS</div><div class="wire hdmi">Name → IP</div><div class="device">IP Address</div>
        <div class="device">HTTPS</div><div class="wire bt">TLS<br>加密通信</div><div class="device">Web</div>
      </div>
      <p class="note">临时预备图。后面拿到老师讲义后按讲义重画。</p>
    `,
    m10: `
      <div class="db-board">
        <div><strong>Table</strong><span>行: レコード / 列: フィールド</span></div>
        <div><strong>Primary Key</strong><span>一意に識別</span></div>
        <div><strong>SQL</strong><span>SELECT / INSERT / UPDATE</span></div>
        <div><strong>正規化</strong><span>重复和矛盾を減らす</span></div>
      </div>
      <p class="note">临时预备图。正式范围等讲义来了再调整。</p>
    `,
    m11: `
      <div class="security-board">
        <div>認証<br><span>本人確認</span></div>
        <div>暗号化<br><span>読めなくする</span></div>
        <div>ハッシュ<br><span>改ざん検出</span></div>
        <div>アクセス制御<br><span>権限管理</span></div>
      </div>
      <p class="note">信息安全是基本情報高频范围，先作为后续复习入口。</p>
    `,
    m12: `
      <div class="flowchart-wide">
        <div class="fc terminal">企画</div><div class="fc arrow">→</div>
        <div class="fc process">要件定義</div><div class="fc arrow">→</div>
        <div class="fc process">設計</div><div class="fc arrow">→</div>
        <div class="fc process">実装</div><div class="fc arrow">→</div>
        <div class="fc terminal">運用</div>
      </div>
      <p class="note">系统开发和管理类内容先占位，后续用老师课件替换。</p>
    `
  };
  return visuals[id] || "";
}

function gateSvg(name, formula, kind) {
  const singleInput = kind === "not" || kind === "buffer";
  const orLike = kind === "or" || kind === "nor" || kind === "xor" || kind === "xnor";
  const notLike = kind === "not" || kind === "buffer";
  const bubbleX = ["nand"].includes(kind) ? 130 : orLike ? 162 : 144;
  const outputStart = kind === "nand" ? 136 : ["nor", "xnor"].includes(kind) ? 168 : orLike ? 156 : kind === "not" ? 150 : kind === "and" ? 124 : 138;
  const inputEnd = orLike ? 47 : notLike ? 34 : 36;
  const bubble = ["not", "nand", "nor", "xnor"].includes(kind) ? `<circle cx="${bubbleX}" cy="50" r="6" fill="#fff" stroke="#276fbf" stroke-width="2"/>` : "";
  const input2 = singleInput ? "" : `<line x1="6" y1="64" x2="${inputEnd}" y2="64"/>`;
  const path = orLike
    ? `<path d="M34 18 C58 20 92 20 118 28 C134 34 147 43 156 50 C147 57 134 66 118 72 C92 80 58 80 34 82 C50 62 50 38 34 18 Z"/>${kind === "xor" || kind === "xnor" ? `<path d="M22 18 C38 38 38 62 22 82"/>` : ""}`
    : notLike
      ? `<path d="M34 14 L34 86 L138 50 Z"/>`
      : `<path d="M36 22 L86 22 C124 22 124 78 86 78 L36 78 Z"/>`;
  return `
    <svg class="gate-svg" viewBox="0 0 180 104" role="img" aria-label="${name}">
      <g fill="none" stroke="#276fbf" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <line x1="6" y1="40" x2="${inputEnd}" y2="40"/>${input2}
        ${path}${bubble}
        <line x1="${outputStart}" y1="50" x2="174" y2="50"/>
      </g>
      <text x="90" y="96" text-anchor="middle">${name}</text>
    </svg>
  `;
}

function vennMini(label, caption, mode) {
  return `
    <div class="venn-mini ${mode}">
      <div class="vm-universe">
        <span class="vm-a">A</span>
        <span class="vm-b">B</span>
      </div>
      <strong>${label}</strong>
      <em>${caption}</em>
    </div>
  `;
}

function vennSvg(label, caption, mode) {
  const fills = {
    a: `<circle cx="82" cy="70" r="42" fill="rgba(39,111,191,.34)"/>`,
    not: `<path d="M8 8 H196 V132 H8 Z M82 28 A42 42 0 1 0 82 112 A42 42 0 1 0 82 28 Z" fill="rgba(200,93,77,.30)" fill-rule="evenodd"/>`,
    union: `<circle cx="82" cy="70" r="42" fill="rgba(39,111,191,.34)"/><circle cx="122" cy="70" r="42" fill="rgba(31,122,93,.34)"/>`,
    inter: `<path d="M102 35 C116 43 124 56 124 70 C124 84 116 97 102 105 C88 97 80 84 80 70 C80 56 88 43 102 35 Z" fill="rgba(200,93,77,.58)"/>`,
    diff: `<path d="M82 28 C68 28 56 34 48 44 C39 55 36 68 39 82 C43 100 60 112 82 112 C89 112 96 110 102 107 C88 98 80 84 80 70 C80 56 88 42 102 33 C96 30 89 28 82 28 Z" fill="rgba(200,93,77,.58)"/>`
  };
  return `
    <div class="venn-svg-card">
      <svg class="venn-svg" viewBox="0 0 204 140" role="img" aria-label="${caption}">
        <rect x="8" y="8" width="188" height="124" rx="8" fill="#f6f8f8" stroke="#d9e0e5"/>
        ${fills[mode] || ""}
        <circle cx="82" cy="70" r="42" fill="none" stroke="#276fbf" stroke-width="3"/>
        <circle cx="122" cy="70" r="42" fill="none" stroke="#1f7a5d" stroke-width="3"/>
        <text x="62" y="72" text-anchor="middle">A</text>
        <text x="142" y="72" text-anchor="middle">B</text>
      </svg>
      <strong>${label}</strong>
      <em>${caption}</em>
    </div>
  `;
}

function milCard(name, cn, formula, kind, rows) {
  const headers = rows[0].length === 2 ? ["A", "X"] : ["A", "B", "X"];
  const table = `
    <table>
      <thead><tr>${headers.map(h => `<th>${h}</th>`).join("")}</tr></thead>
      <tbody>${rows.map(r => `<tr>${r.map(v => `<td>${v}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>
  `;
  return `
    <section class="mil-card">
      <div class="mil-title">
        <strong>${name}</strong>
        <span>${cn}</span>
      </div>
      ${gateSvg(name, formula, kind)}
      <p>${formula}</p>
      ${table}
    </section>
  `;
}

function toTwosComplement(value, bits) {
  const max = 2 ** bits;
  const wrapped = ((value % max) + max) % max;
  return wrapped.toString(2).padStart(bits, "0").slice(-bits);
}

function updateBase() {
  const value = Number($("decInput").value || 0);
  const bits = Math.max(2, Math.min(32, Number($("bitWidth").value || 8)));
  const wrapped = ((value % (2 ** bits)) + (2 ** bits)) % (2 ** bits);
  $("baseOutput").innerHTML = [
    ["二进制", Math.abs(value).toString(2)],
    [`${bits} 位补数`, toTwosComplement(value, bits)],
    ["十六进制", wrapped.toString(16).toUpperCase().padStart(Math.ceil(bits / 4), "0")]
  ].map(([k, v]) => `<div><span>${k}</span><strong>${v}</strong></div>`).join("");

  const x = Number($("fracInput").value || 0);
  const n = Math.max(1, Math.min(24, Number($("fracBits").value || 8)));
  let rest = x;
  const bitsOut = [];
  for (let i = 0; i < n; i += 1) {
    rest *= 2;
    const bit = rest >= 1 ? 1 : 0;
    bitsOut.push(bit);
    if (bit) rest -= 1;
  }
  $("fracOutput").innerHTML = bitsOut.map(b => `<span>${b}</span>`).join("");
}

function updateLogic() {
  const a = $("logicA").checked ? 1 : 0;
  const b = $("logicB").checked ? 1 : 0;
  const ops = {
    andOut: a & b,
    orOut: a | b,
    xorOut: a ^ b,
    nandOut: Number(!(a & b))
  };
  Object.entries(ops).forEach(([id, val]) => $(id).textContent = val);
  const rows = [[0, 0], [0, 1], [1, 0], [1, 1]].map(([x, y]) => `
    <tr>
      <td>${x}</td><td>${y}</td><td>${x & y}</td><td>${x | y}</td><td>${x ^ y}</td><td>${Number(!(x & y))}</td>
    </tr>
  `).join("");
  $("truthTable").innerHTML = `<thead><tr><th>A</th><th>B</th><th>AND</th><th>OR</th><th>XOR</th><th>NAND</th></tr></thead><tbody>${rows}</tbody>`;
}

function updatePerformance() {
  const ghz = Number($("clockGhz").value || 0);
  const cpi = Number($("cpi").value || 1);
  const mips = ghz * 1000 / cpi;
  $("cpuOutput").innerHTML = `
    <div><span>MIPS</span><strong>${mips.toFixed(1)}</strong></div>
    <div><span>1 周期时间</span><strong>${ghz ? (1 / ghz).toFixed(3) : "0.000"} ns</strong></div>
  `;
  const cache = Number($("cacheNs").value || 0);
  const mem = Number($("memoryNs").value || 0);
  const hit = Math.max(0, Math.min(100, Number($("hitRate").value || 0))) / 100;
  const eat = hit * cache + (1 - hit) * mem;
  $("cacheOutput").innerHTML = `
    <div><span>实效访问时间</span><strong>${eat.toFixed(2)} ns</strong></div>
    <div><span>未命中率</span><strong>${((1 - hit) * 100).toFixed(1)}%</strong></div>
  `;
}

function updateIo() {
  const w = Number($("imgW").value || 0);
  const h = Number($("imgH").value || 0);
  const mbps = Number($("mbps").value || 0);
  const frameBits = w * h * 24;
  const fps = frameBits ? (mbps * 1_000_000 / frameBits) : 0;
  $("ioOutput").innerHTML = `
    <div><span>每帧数据量</span><strong>${(frameBits / 8 / 1024 / 1024).toFixed(2)} MB</strong></div>
    <div><span>理论帧率</span><strong>${fps.toFixed(2)} fps</strong></div>
  `;
}

function updateAvailability() {
  const up = Number($("uptime").value || 0);
  const down = Number($("downtime").value || 0);
  const availability = up + down ? up / (up + down) : 0;
  const target = availability * 1.25;
  const neededDown = target >= 1 || target === 0 ? 0 : up / target - up;
  $("availOutput").innerHTML = `
    <div><span>当前稼働率</span><strong>${(availability * 100).toFixed(2)}%</strong></div>
    <div><span>提高 1.25 倍后的维护时间</span><strong>${Math.max(0, neededDown).toFixed(1)}</strong></div>
  `;
}

function bindInputs() {
  $("searchInput").addEventListener("input", e => {
    renderModules(e.target.value);
    renderVisuals(e.target.value);
    renderGlossary(e.target.value);
    renderQuestionList(e.target.value);
  });
  document.querySelectorAll(".tool-jump").forEach(btn => {
    btn.addEventListener("click", () => $(btn.dataset.tool).scrollIntoView({ behavior: "smooth", block: "start" }));
  });
  ["decInput", "bitWidth", "fracInput", "fracBits"].forEach(id => $(id).addEventListener("input", updateBase));
  ["logicA", "logicB"].forEach(id => $(id).addEventListener("change", updateLogic));
  ["clockGhz", "cpi", "cacheNs", "memoryNs", "hitRate"].forEach(id => $(id).addEventListener("input", updatePerformance));
  ["imgW", "imgH", "mbps"].forEach(id => $(id).addEventListener("input", updateIo));
  ["uptime", "downtime"].forEach(id => $(id).addEventListener("input", updateAvailability));
}

renderNav();
renderModules();
renderVisuals();
renderFilters();
renderGlossary();
renderProblems();
renderQuestionFilters();
renderQuestionList();
renderExtraPractice();
renderFlowSymbols();
bindInputs();
updateBase();
updateLogic();
updatePerformance();
updateIo();
updateAvailability();
