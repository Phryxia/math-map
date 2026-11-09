# Wilkinson 다항식

# 개요

**Wilkinson 다항식(Wilkinson's polynomial)** 은 근이 $1,2,\dots,20$ 인 다항식 $w(z)=(z-1)(z-2)\cdots(z-20)$ 이다. 근이 서로 $1$ 씩 떨어진 정수인데도, 전개한 계수 하나를 $2^{-23}\approx 1.2\times 10^{-7}$ 만큼 바꾸면 근 열 개가 실수축을 떠나 복소수가 된다. 이 다항식은 계수로 적은 다항식의 근이 계수의 작은 변화에 얼마나 크게 움직일 수 있는지를, 근마다 계산되는 배율로 보인다.

# 직관

$w(z)=z^{20}-210z^{19}+\cdots+20!$ 이다. $z^{19}$ 의 계수 $-210$ 을 $-210-\delta$ 로 바꾼 다항식은 $w(z)-\delta z^{19}$ 이다. 근 $j$ 가 $j+h$ 로 움직인다고 하면 $w(j+h)-\delta(j+h)^{19}=0$ 이고, $w(j+h)\approx w'(j)h$ 로 어림하면 $h\approx\delta j^{19}/w'(j)$ 다.

$w'(j)$ 는 $j$ 를 뺀 나머지 인수의 곱 $\prod_{k\ne j}(j-k)$ 이고 절댓값이 $(j-1)!\thinspace(20-j)!$ 이다. $j=20$ 이면 배율이 $20^{19}/19!\approx 4.3\times 10^{7}$ 이고, $j=16$ 이면 $16^{19}/(15!\thinspace 4!)\approx 2.4\times 10^{9}$ 이다. $\delta=2^{-23}$ 에 이 배율을 곱하면 근의 간격 $1$ 보다 훨씬 크다.

# 정의

Wilkinson 다항식은 다음 다항식이다.

$$
w(z)=\prod_{k=1}^{20}(z-k)=\sum_{i=0}^{20}a_iz^i,\qquad a_{20}=1,\quad a_{19}=-210,\quad a_0=20!
$$

$a_{19}=-(1+2+\cdots+20)$ 이고 $a_0$ 은 근의 곱이다. 계수 $a_i$ 에 대한 단순근 $z_j$ 의 **조건수(condition number)** 는 $a_i$ 의 상대 변화에 대한 $z_j$ 의 상대 변화의 배율 $\vert a_iz_j^{i-1}/w'(z_j)\vert$ 다. 직관 절의 배율 $j^{19}/\vert w'(j)\vert$ 에 $\vert a_{19}\vert/j=210/j$ 를 곱한 값이다.

# 성질

## 근의 섭동 공식

$p(z)=\sum a_iz^i$ 의 단순근 $z_0$ 에서 계수를 $a_i+\varepsilon c_i$ 로 바꾸면 근은 $z_0+\varepsilon z_1+O(\varepsilon^2)$ 로 움직이고 다음이 성립한다.

$$
z_1=-\frac{\sum_ic_iz_0^i}{p'(z_0)}
$$

$p(z_0)=0$ 에서 음함수 정리를 쓴 결과다. $\vert p'(z_0)\vert$ 가 작고 $\vert z_0\vert$ 가 크면 움직임이 커진다. Wilkinson 다항식에서 $\vert w'(j)\vert$ 는 $j$ 가 가운데일 때 가장 작고, 큰 $j$ 에서는 $j^{19}$ 가 커져 둘이 합쳐진 $j=16$ 근처에서 배율이 가장 크다.

## 복소수로 갈라지는 근

$a_{19}$ 를 $-210-2^{-23}$ 으로 바꾼 다항식의 근은 $1,\dots,9$ 근처의 실근 아홉 개, $20.85$ 근처의 실근 하나, 그리고 복소 켤레 다섯 쌍이다. 가장 많이 움직인 쌍은 $16.73\pm 2.81i$ 다[^1]. 1 차 어림이 근의 간격보다 큰 움직임을 내는 자리에서는 이웃한 두 실근이 만나 복소 켤레 쌍이 된다.

## 동반행렬의 고윳값

$p$ 의 근은 동반행렬(companion matrix)

$$
C=\begin{pmatrix}0&0&\cdots&0&-a_0\cr 1&0&\cdots&0&-a_1\cr \vdots&&\ddots&&\vdots\cr 0&0&\cdots&1&-a_{19}\end{pmatrix}
$$

의 고윳값이다. 계수의 변화는 $C$ 의 마지막 열의 변화이므로, 근의 민감도는 $C$ 의 [고윳값 조건수](eigenvalue-condition-number.md)로 나타난다. 같은 근 $1,\dots,20$ 을 대각행렬 $\mathrm{diag}(1,\dots,20)$ 의 고윳값으로 주면 조건수가 모두 $1$ 이다. 근의 민감도는 근의 위치가 아니라 근을 계수로 적은 표현에서 생긴다.

# 활용

- 근 찾기의 표현 선택. 근을 계수에서 계산하는 [Newton 법](newton-method.md)이나 동반행렬의 [QR 알고리즘](qr-algorithm.md)은 계수에 든 반올림 오차만으로 근이 크게 틀릴 수 있다. 다항식을 근 근처의 값이나 Chebyshev 계수로 적으면 같은 근의 조건수가 작아진다[^2]. Chebyshev 계수로 적은 다항식의 근은 [Colleague 행렬](colleague-matrix.md)의 고윳값으로 구한다.
- 특성다항식을 거치지 않는 고윳값 계산. 행렬의 고윳값을 특성다항식의 계수로 바꾼 뒤 근을 찾으면 Wilkinson 다항식과 같은 민감도가 생기므로, 고윳값은 행렬에 직접 닮음 변환을 쓰는 QR 알고리즘으로 계산한다.
- 후방 오차 분석의 예. 계산한 근이 계수를 조금 바꾼 다항식의 정확한 근이어도 근 자체의 오차는 조건수만큼 클 수 있다는 것을, Wilkinson 은 이 다항식으로 보였다[^1].

[^1]: J. H. Wilkinson, "The perfidious polynomial", in G. H. Golub (ed.), *Studies in Numerical Analysis*, MAA Studies in Mathematics 24 (1984), 1–28.
[^2]: L. N. Trefethen, *Approximation Theory and Approximation Practice*, SIAM (2013), 18 장.

# 연관 문서

## 선수지식

- [고윳값 조건수](eigenvalue-condition-number.md)

## 더 알아보기

- [Colleague 행렬](colleague-matrix.md)

#linear_algebra #algorithms #computation #analysis
