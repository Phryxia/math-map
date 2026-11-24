# Borel 정규수

# 개요

**정규수(normal number)** 는 소수 전개에 모든 숫자와 모든 숫자 묶음이 같은 빈도로 나오는 실수다. $1/7=0.142857142857\cdots$ 에는 숫자 $0$, $3$, $6$, $9$ 가 한 번도 나오지 않는다. 소수점 아래를 무작위로 뽑은 것처럼 보이는 수와 이런 수를 가르려면 숫자를 세는 기준이 있어야 한다. 정규수는 길이 $k$ 인 숫자 묶음 하나하나가 비율 $10^{-k}$ 로 나오기를 요구해 그 기준을 준다.

# 직관

$0.101001000100001\cdots$ 은 $1$ 사이의 $0$ 이 하나씩 늘어나는 수다. 전개가 되풀이되지 않으므로 [무리수](irrational-numbers.md)다. 그런데 처음 $N$ 자리 안의 $1$ 은 대략 $\sqrt{2N}$ 개뿐이어서 $1$ 의 비율이 $0$ 으로 간다. 무리수라는 것만으로는 숫자가 고르게 나오지 않는다.

자연수를 차례로 이어 붙인 $0.123456789101112\cdots$ 에서 숫자를 센다. $99$ 까지 이어 붙이면 $9+180=189$ 자리이고, $1$ 부터 $9$ 까지의 숫자는 일의 자리에 $10$ 번, 십의 자리에 $10$ 번 나와 각각 $20$ 번이다. $0$ 은 $10,20,\dots,90$ 의 일의 자리에만 나와 $9$ 번이다. $999$ 까지 이어 붙이면 $2889$ 자리 가운데 $0$ 이 $189$ 번, 나머지 숫자가 각각 $300$ 번이다.

$0$ 의 비율은 $9/189\approx 0.048$ 에서 $189/2889\approx 0.065$ 로 늘고, 다른 숫자의 비율은 $20/189\approx 0.106$ 에서 $300/2889\approx 0.104$ 로 준다. 자릿수가 늘수록 열 숫자의 비율이 모두 $1/10$ 으로 간다. 두 자리 묶음 $00$ 부터 $99$ 까지도 같은 계산으로 비율이 $1/100$ 으로 간다. 이 수가 정규수의 첫 예다.

# 정의

정수 $b\ge 2$ 를 밑으로 두고 $x\in\lbrack 0,1)$ 을 $b$ 진법으로 전개한다.

$$
x=\sum_{n=1}^{\infty}a_nb^{-n},\qquad a_n\in\lbrace 0,1,\dots,b-1\rbrace
$$

$b$ 진 숫자 $k$ 개로 된 묶음 $w=w_1w_2\cdots w_k$ 마다 다음이 성립하면 $x$ 를 **$b$ 진법 정규수(normal in base b)** 라 한다.

$$
\lim_{N\to\infty}\frac1N\thinspace\char35{}\lbrace n\le N:\thinspace a_na_{n+1}\cdots a_{n+k-1}=w\rbrace=b^{-k}
$$

직관 절의 $0.123456789101112\cdots$ 은 $10$ 진법 정규수이고, $1/7$ 과 $0.101001000100001\cdots$ 은 $k=1$ 에서 이미 조건을 어긴다. $k=1$ 인 조건만 만족하는 수를 **단순 정규수(simply normal number)** 라 한다. $0.0123456789\thinspace 0123456789\cdots$ 은 $10$ 진법 단순 정규수이지만 묶음 $00$ 이 나오지 않으므로 정규수가 아니다.

모든 밑 $b\ge 2$ 에서 정규수인 수를 **절대 정규수(absolutely normal number)** 라 한다. 실수 $x$ 는 소수부 $x-\lfloor x\rfloor$ 가 정규수일 때 정규수라 한다.

# 성질

## Borel 정규수 정리

Borel 정규수 정리(Borel's normal number theorem)는 $\lbrack 0,1)$ 의 거의 모든 수가 절대 정규수라는 정리다.[^1] 정규수가 아닌 수 전체의 Lebesgue 측도가 $0$ 이다.

증명의 요지. $x$ 를 $\lbrack 0,1)$ 에서 균등하게 뽑으면 $b$ 진 숫자 $a_1,a_2,\dots$ 은 서로 독립이고 각각 $0,\dots,b-1$ 위에서 균등하다. 숫자 $d$ 의 빈도는 지시변수 $\mathbf 1\lbrack a_n=d\rbrack$ 의 평균이므로 [큰 수의 법칙](law-of-large-numbers.md)에 의해 확률 $1$ 로 $1/b$ 에 수렴한다.

길이 $k$ 인 묶음은 겹치는 자리끼리 독립이 아니다. 시작 위치를 $k$ 로 나눈 나머지로 나누면 같은 나머지의 묶음들은 겹치지 않아 독립이고, 각각 확률 $b^{-k}$ 로 $w$ 와 같다. 나머지마다 큰 수의 법칙을 쓰고 $k$ 개의 평균을 내면 빈도가 $b^{-k}$ 로 간다. 밑 $b$, 길이 $k$, 묶음 $w$ 는 셀 수 있게 많으므로 예외 집합들의 합집합도 측도 $0$ 이다.

## 등분포와의 동치

Wall 정리(Wall's theorem)는 다음이다. $x$ 가 $b$ 진법 정규수인 것은 수열 $(\lbrace b^nx\rbrace)\_{n\ge 0}$ 이 [등분포](equidistribution.md)인 것과 동치다.[^2]

$\lbrace b^nx\rbrace=0.a_{n+1}a_{n+2}\cdots$ 이므로, 묶음 $w$ 가 위치 $n+1$ 에서 시작하는 것은 $\lbrace b^nx\rbrace$ 가 다음 구간에 드는 것과 같다.

$$
I_w=\Big\lbrack\thinspace\sum_{i=1}^{k}w_ib^{-i},\thinspace\sum_{i=1}^{k}w_ib^{-i}+b^{-k}\Big)
$$

그래서 정규성은 길이가 $b^{-k}$ 인 $b$ 진 구간에서 등분포의 빈도 조건과 같다. 임의의 구간은 $b$ 진 구간의 합집합으로 위아래에서 근사되므로 두 조건이 동치다. 이 동치로 $x\mapsto\lbrace bx\rbrace$ 에 [에르고딕 정리](ergodic-theorem.md)를 적용하면 Borel 정규수 정리가 다시 증명된다.

## 유리수

유리수는 어느 밑에서도 정규수가 아니다. 유리수의 $b$ 진 전개는 어느 자리부터 주기 $p$ 로 되풀이되므로, 길이 $p+1$ 인 묶음은 많아야 $p$ 가지만 나온다. $b^{p+1}\gt p$ 이므로 빈도가 $0$ 인 묶음이 있다.

## 밑의 바꿈

$x$ 가 $b$ 진법 정규수인 것은 $b^m$ 진법 정규수인 것과 동치다. $b^m$ 진 숫자 하나가 $b$ 진 숫자 $m$ 개의 묶음이므로 두 빈도 조건이 서로를 함의한다. 그래서 $2$ 진법 정규수와 $4$ 진법 정규수는 같은 수다.

두 밑 $r$, $s$ 에서 $\log r/\log s$ 가 무리수이면 이 동치가 깨진다. Schmidt 는 이 경우 $r$ 진법 정규수이면서 $s$ 진법 정규수가 아닌 수가 셀 수 없이 많다는 것을 증명했다.[^3] $10$ 진법 정규수인 $0.123456789101112\cdots$ 이 $2$ 진법 정규수인지는 정의만으로 정해지지 않는다.

## 구체적인 정규수

- Champernowne 수 $0.123456789101112\cdots$ 은 $10$ 진법 정규수다.[^4] 증명은 $d$ 자리 수 전체에서 묶음을 세고, 두 수의 경계에 걸친 묶음의 수를 위에서 어림하는 것이다.
- Copeland–Erdős 수 $0.235711131719\cdots$ 은 소수를 차례로 이어 붙인 수이고 $10$ 진법 정규수다.[^5] 증가하는 정수열이 모든 $\theta\lt 1$ 에서 충분히 큰 $x$ 이하에 $x^\theta$ 개 이상 있으면, 그 열을 이어 붙인 수도 정규수다.
- Stoneham 수는 서로소인 $b,c\ge 2$ 에서 다음 꼴의 수이고 $b$ 진법 정규수다.[^6]

$$
\alpha_{b,c}=\sum_{k=1}^{\infty}\frac{1}{c^k\thinspace b^{c^k}}
$$

위의 수는 모두 한 밑에서 정규수임을 보인 것이다. 절대 정규수의 첫 구성은 Sierpiński 의 것이다.[^7]

## 알려진 열린 문제

$\sqrt 2$, $\pi$, $e$, $\log 2$ 가운데 어느 하나라도 어떤 밑에서 정규수인지는 알려져 있지 않다. $\sqrt 2$ 가 $10$ 진법 단순 정규수인지도 알려져 있지 않다.[^7]

# 활용

- [Martin-Löf 무작위성](martin-lof-randomness.md). Martin-Löf 무작위인 이진 수열은 $2$ 진법 정규수의 전개다. 역은 성립하지 않는다. Champernowne 꼴의 이진 수열은 정규수이면서 프로그램으로 계산되므로 무작위가 아니다.
- [측도와 범주의 분해](measure-category-decomposition.md). 정규수 전체는 측도 $1$ 이지만 제1 범주 집합이다. 측도의 뜻에서 전형적인 수와 범주의 뜻에서 전형적인 수가 다른 예다.
- 의사난수 생성. Bailey 와 Crandall 은 Stoneham 수의 $2$ 진 숫자를 난수열로 쓰는 생성기를 만들고, 정규성으로 그 열의 묶음 빈도를 보장했다.[^6]
- 등분포의 예. Wall 정리에 의해 $\lbrace 2^nx\rbrace$ 의 등분포 문제가 $x$ 의 이진 숫자의 빈도 문제와 같다. [Benford 법칙](benford-law.md)이 $\lbrace n\log_{10}2\rbrace$ 의 등분포에서 나오는 것과 같은 꼴의 환원이다.

[^1]: É. Borel, "Les probabilités dénombrables et leurs applications arithmétiques", *Rendiconti del Circolo Matematico di Palermo* 27, 1909, pp. 247–271.
[^2]: D. D. Wall, *Normal Numbers*, Ph.D. thesis, University of California, Berkeley, 1949.
[^3]: W. M. Schmidt, "On normal numbers", *Pacific Journal of Mathematics* 10, 1960, pp. 661–672.
[^4]: D. G. Champernowne, "The construction of decimals normal in the scale of ten", *Journal of the London Mathematical Society* 8, 1933, pp. 254–260.
[^5]: A. H. Copeland, P. Erdős, "Note on normal numbers", *Bulletin of the American Mathematical Society* 52, 1946, pp. 857–860.
[^6]: D. H. Bailey, R. E. Crandall, "Random generators and normal numbers", *Experimental Mathematics* 11, 2002, pp. 527–546.
[^7]: Y. Bugeaud, *Distribution Modulo One and Diophantine Approximation*, Cambridge Tracts in Mathematics 193, Cambridge University Press, 2012, Chapter 4.

# 연관 문서

## 선수지식

- [무리수](irrational-numbers.md)
- [등분포](equidistribution.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #probability #measure_theory
