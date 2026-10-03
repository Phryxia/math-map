# 등분포

# 개요

등분포는 수열이 구간에 길이만큼의 빈도로 들어가는 성질이다. $\lbrack 0,1)$ 의 수열 $(x_n)$ 이 모든 부분구간 $\lbrack a,b)$ 에서

$$
\lim_{N\to\infty}\frac{\char35{}\lbrace n\le N:\ x_n\in\lbrack a,b)\rbrace}{N}=b-a
$$

를 만족하면 등분포다. Weyl 판정법은 이 조건을 지수합 하나의 수렴으로 바꾼다.

# 직관

$\alpha$ 가 무리수일 때 $\lbrace n\alpha\rbrace$ 가 $\lbrack 0,1)$ 에서 조밀하다는 것은 비둘기집 논법으로 나온다. 조밀하다는 것은 어느 구간에도 들어간다는 뜻이고, 얼마나 자주 들어가는지는 말해 주지 않는다. 구간 $\lbrack 0,1/2)$ 에 전체의 절반이 들어가는지 삼분의 이가 들어가는지를 알려면 빈도를 세야 한다.

빈도는 구간의 지시함수의 평균이다. 지시함수는 뛰어 있어 다루기 어려우므로 지수함수 $e^{2\pi ikx}$ 로 바꿔 계산한다.

$$
\frac1N\sum_{n=1}^{N}e^{2\pi ikn\alpha}=\frac{e^{2\pi ik\alpha}}{N}\cdot\frac{e^{2\pi ikN\alpha}-1}{e^{2\pi ik\alpha}-1}
$$

$k\ne0$ 이고 $\alpha$ 가 무리수이면 $e^{2\pi ik\alpha}\ne1$ 이라 분모가 $0$ 이 아니고 분자의 절댓값은 $2$ 이하다. 따라서 평균이 $0$ 으로 가고, 이는 $\int_0^1e^{2\pi ikx}\thinspace dx=0$ 과 같은 값이다. $k=0$ 이면 양쪽이 $1$ 이다.

지수함수에서 평균과 적분이 맞으면 지수함수의 유한합에서도 맞는다. 구간의 지시함수를 위아래에서 조이는 연속함수를 잡고 그것을 지수함수의 합으로 균등근사하면, 빈도가 구간의 길이로 끼인다. 모든 $k\ne0$ 에서 지수합의 평균이 $0$ 이라는 조건만 확인하면 되는 것이 이 계산의 결론이다.

# 정의

## 등분포

$\lbrack 0,1)$ 의 수열 $(x_n)\_{n\ge1}$ 이 모든 $0\le a\lt b\le1$ 에서

$$
\lim_{N\to\infty}\frac1N\thinspace\char35{}\lbrace n\le N:\ x_n\in\lbrack a,b)\rbrace=b-a
$$

를 만족하면 $(x_n)$ 이 **등분포**라 한다. 실수열 $(y_n)$ 에 대해서는 소수부 $x_n=\lbrace y_n\rbrace$ 이 등분포일 때 $(y_n)$ 이 **법 $1$ 에서 등분포**라 한다.

## 불일치도

$$
D_N=\sup_{0\le a\lt b\le1}\left\vert\frac1N\thinspace\char35{}\lbrace n\le N:\ x_n\in\lbrack a,b)\rbrace-(b-a)\right\vert
$$

를 **불일치도**라 한다. 등분포인 것은 $D_N\to0$ 인 것과 동치이고, $D_N$ 의 감소 속도가 등분포의 속도를 재는 양이다.

# 성질

## Weyl 판정법

> **정리**(Weyl)**.** $(x_n)$ 이 등분포인 것은 모든 정수 $k\ne0$ 에서 다음이 성립하는 것과 동치다.

$$
\lim_{N\to\infty}\frac1N\sum_{n=1}^{N}e^{2\pi ikx_n}=0
$$

한 방향은 등분포가 Riemann 적분가능한 $f$ 에서 평균과 적분의 일치를 주기 때문이고, $f(x)=e^{2\pi ikx}$ 를 넣으면 된다. 역방향은 삼각다항식이 $\lbrack 0,1\rbrack$ 의 연속함수를 균등근사한다는 사실을 쓴다. 구간의 지시함수를 위아래에서 조이는 연속함수 $g\_-\le\mathbf 1\_{\lbrack a,b)}\le g\_+$ 를 $\int(g\_+-g\_-)\lt\varepsilon$ 이 되게 잡고 각각을 삼각다항식으로 근사하면, 빈도의 상극한과 하극한이 $b-a$ 를 중심으로 $\varepsilon$ 안에 들어간다.

## 다항식 수열

> **정리**(Weyl)**.** $P$ 가 실계수 다항식이고 최고차 계수가 무리수이면 $(P(n))$ 이 법 $1$ 에서 등분포다.

증명의 요지는 van der Corput 차분법이다. 지수합의 절댓값 제곱을 전개하면

$$
\left\vert\frac1N\sum_{n\le N}e^{2\pi ikP(n)}\right\vert^2\le\frac{1}{H}+\frac{2}{H}\sum_{h=1}^{H}\left\vert\frac1N\sum_{n}e^{2\pi ik(P(n+h)-P(n))}\right\vert
$$

꼴의 부등식이 나온다. $P(n+h)-P(n)$ 은 $P$ 보다 차수가 하나 낮고 최고차 계수가 여전히 무리수의 배수이므로, 차수에 대한 귀납으로 $1$ 차까지 내려간다. $1$ 차는 직관 절의 등비수열 계산이다.

## 등분포가 아닌 수열

$x_n=\lbrace\log n\rbrace$ 은 등분포가 아니다. $\log n$ 의 증가가 느려서 소수부가 한 구간에 머무는 길이가 $n$ 에 비례해 길어지고, 빈도가 구간의 위치에 따라 달라진다. 반면 $\lbrace n\log_{10}2\rbrace$ 은 $\log_{10}2$ 가 무리수이므로 등분포이고, 이것이 $2^n$ 의 최고 유효숫자가 Benford 분포를 따르는 이유다.

## Erdős–Turán 부등식

> **정리.** 어떤 상수 $C$ 가 있어 모든 $K\ge1$ 에서 다음이 성립한다.

$$
D_N\le C\left(\frac1K+\sum_{k=1}^{K}\frac1k\left\vert\frac1N\sum_{n\le N}e^{2\pi ikx_n}\right\vert\right)
$$

Weyl 판정법은 등분포의 여부만 주지만 이 부등식은 불일치도를 지수합으로 묶으므로 속도까지 준다. 지수합을 추정하는 해석적 방법이 그대로 등분포의 속도 추정이 된다.

# 활용

- **무리수 회전의 궤도.** [에르고딕 정리](ergodic-theorem.md)를 무리수 회전과 구간의 지시함수에 적용하면 거의 모든 출발점에서 등분포가 나온다. Weyl 판정법은 같은 결론을 모든 출발점에서 준다.
- **준몬테카를로 적분.** 적분을 $\frac1N\sum f(x_n)$ 으로 근사할 때 오차가 $f$ 의 변동과 $D_N$ 의 곱으로 묶인다. van der Corput 수열처럼 $D_N$ 이 $(\log N)/N$ 인 수열을 쓰면 무작위 표본의 $N^{-1/2}$ 보다 빠르다.
- **연분수와 근사의 질.** $\lbrace n\alpha\rbrace$ 의 불일치도는 $\alpha$ 의 [연분수](continued-fractions.md) 부분몫의 크기로 정해진다. 부분몫이 유계인 $\alpha$ 에서 $D_N$ 이 가장 작고, 황금비가 그 극단이다.
- **지수합 추정.** 해석적 정수론에서 $\sum e^{2\pi if(n)}$ 의 크기를 재는 문제가 등분포의 속도 문제와 같은 대상이다. [Riemann zeta 함수](riemann-zeta.md)의 임계선 위 크기 추정이 그런 합으로 환원된다.

# 연관 문서

## 선수지식

- [Fourier 급수](fourier-series.md)
- [에르고딕 정리](ergodic-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #analysis #measure_theory
