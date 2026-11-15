# Borel–Kolmogorov 역설

# 개요

**Borel–Kolmogorov 역설(Borel–Kolmogorov paradox)** 은 확률이 $0$ 인 사건으로 조건을 걸 때, 그 사건을 어느 변수의 값으로 적느냐에 따라 조건부 분포가 달라지는 예다. 지구 표면에 균등하게 찍은 점이 적도 위에 있다고 하면 경도는 균등하게 퍼지지만, 같은 크기의 원인 자오선 위에 있다고 하면 위도는 적도 근처에 몰린다. [조건부 기댓값](conditional-expectation.md)은 사건 하나가 아니라 변수 전체에 대해 정의되므로, 두 답은 서로 다른 변수로 조건을 건 서로 다른 질문의 답이다.

# 직관

반지름 $1$ 인 구 위에 점을 균등하게 찍고 경도를 $\lambda\in\lbrack -\pi,\pi)$, 위도를 $\varphi\in\lbrack -\pi/2,\pi/2\rbrack$ 로 적는다. 위도 $\varphi$ 에서 경도 방향의 원은 반지름이 $\cos\varphi$ 라서, 넓이 요소는 $\cos\varphi\thinspace d\varphi\thinspace d\lambda$ 이다. 구의 넓이 $4\pi$ 로 나누면 $(\lambda,\varphi)$ 의 결합 밀도가 나온다.

$$
f(\lambda,\varphi)=\frac{\cos\varphi}{4\pi}
$$

점이 적도 근처, 곧 $\lvert\varphi\rvert\lt\varepsilon$ 인 띠에 있다는 조건을 건다. 띠의 폭은 경도에 상관없이 같으므로 띠 안의 점은 경도에 대해 균등하다. $\varepsilon\to 0$ 이면 적도 위의 경도가 균등분포다.

점이 본초 자오선 근처, 곧 $\lvert\lambda\rvert\lt\varepsilon$ 인 조각에 있다는 조건을 건다. 이 조각은 두 극에서 만나는 두 자오선 사이의 구면 이각형(spherical lune)이고, 적도에서 폭이 $2\varepsilon$ 이며 극으로 가면 폭이 $0$ 으로 줄어든다. 조각 안의 점은 폭이 넓은 적도 근처에 더 많고, 위도의 밀도가 $\cos\varphi$ 에 비례한다. $\varepsilon\to 0$ 이어도 이 비례는 그대로 남는다.

적도와 자오선은 모두 구의 중심을 지나는 큰 원이고, 구를 돌리면 하나가 다른 하나로 옮겨진다. 그런데 앞의 조건에서는 큰 원 위의 분포가 균등하고 뒤의 조건에서는 균등하지 않다. 두 조건이 다른 것은 큰 원을 둘러싸는 근방의 모양, 곧 띠와 이각형이다.

# 정의

## 역설의 진술

구 위의 균등한 점에서, 적도를 $\lbrace\varphi=0\rbrace$ 로 보고 조건을 걸면 경도의 조건부 밀도는 $1/(2\pi)$ 다. 본초 자오선과 그 반대편 자오선이 이루는 큰 원을 $\lbrace\lambda=0\rbrace\cup\lbrace\lambda=-\pi\rbrace$ 로 보고 조건을 걸면, 반원 $\lbrace\lambda=0\rbrace$ 위에서 위도의 조건부 밀도는 $\cos\varphi/2$ 다. 회전으로 옮겨지는 두 큰 원에서 조건부 분포가 다르다는 것을 **Borel–Kolmogorov 역설** 이라 한다.

É. Borel 이 1909 년에 이 예를 적었고, A. N. Kolmogorov 가 1933 년 확률론의 공리화에서 이 예로 확률이 $0$ 인 사건 하나에 대한 조건부 확률은 정의할 수 없다고 정리했다.[^1]

## 변수에 대한 조건부 분포

확률변수 $Z$ 에 대한 조건부 확률 $P(A\mid Z)$ 는 $\sigma(Z)$ 가측이고 $\sigma(Z)$ 의 모든 사건 위에서 적분이 $P$ 와 맞는 확률변수다. 이것은 $Z$ 의 분포에 대해 영집합인 곳에서 값을 바꾸어도 여전히 조건을 만족한다. $P(Z=z)=0$ 이면 한 점 $z$ 에서의 값 $P(A\mid Z=z)$ 는 이 정의만으로 정해지지 않는다.

결합 밀도 $f(x,z)$ 가 연속이고 $Z$ 의 밀도가 $z$ 에서 양수이면, $z$ 에 대해 연속인 판을 골라 다음과 같이 쓴다.

$$
f(x\mid Z=z)=\frac{f(x,z)}{\int f(x',z)\thinspace dx'}
$$

이 값은 $Z$ 라는 변수에 따라 정해진다. 같은 집합 $\lbrace Z=z\rbrace=\lbrace W=w\rbrace$ 를 다른 변수 $W$ 로 적으면 다른 값이 나올 수 있다.

# 성질

## 구 위의 두 계산

결합 밀도에 위 식을 쓰면 다음이 나온다.

$$
\begin{aligned}
f(\lambda\mid\varphi=0)&=\frac{1/(4\pi)}{\int_{-\pi}^{\pi}d\lambda'/(4\pi)}=\frac{1}{2\pi}\cr
f(\varphi\mid\lambda=0)&=\frac{\cos\varphi}{\int_{-\pi/2}^{\pi/2}\cos\varphi'\thinspace d\varphi'}=\frac{\cos\varphi}{2}
\end{aligned}
$$

구를 돌려 자오선 $\lbrace\lambda=0\rbrace$ 을 새 좌표의 적도로 옮기고, 그 좌표의 위도를 $\varphi'$ 이라 하자. 같은 반원이 $\lbrace\varphi'=0\rbrace$ 의 일부이고, $\varphi'$ 에 대해 조건을 걸면 반원 위의 분포가 균등하다. 집합은 같고 조건을 건 변수만 $\lambda$ 에서 $\varphi'$ 으로 바뀌었다.

## 근방의 극한

$f$ 가 연속이면 연속인 판은 근방의 극한과 같다.

$$
P(A\mid Z=z)=\lim_{\varepsilon\to 0}P\bigl(A\mid\lvert Z-z\rvert\lt\varepsilon\bigr)
$$

우변의 근방 $\lbrace\lvert Z-z\rvert\lt\varepsilon\rbrace$ 은 $Z$ 가 정한다. $Z=\lambda$ 이면 이각형이고 $Z=\varphi'$ 이면 폭이 고른 띠다. 확률이 $0$ 인 사건 하나는 어느 근방으로 다가갈지를 정하지 않으므로 조건부 확률을 정하지 않는다.

## 정사각형 위의 대각선

$(X,Y)$ 가 단위 정사각형 위의 균등분포를 따를 때 대각선 $\lbrace X=Y\rbrace$ 위의 $X$ 의 분포를 두 가지로 구한다.

$Z=Y-X$ 로 두면 $(X,Z)$ 의 결합 밀도는 정의역 위에서 $1$ 이고, $Z=0$ 에서 $X$ 의 조건부 밀도는 $\lbrack 0,1\rbrack$ 위의 균등분포다. 근방 $\lbrace\lvert Y-X\rvert\lt\varepsilon\rbrace$ 은 폭이 고른 띠다.

$W=Y/X$ 로 두면 $y=wx$ 에서 $dy=x\thinspace dw$ 이므로 $(X,W)$ 의 결합 밀도는 $x$ 이고, $W=1$ 에서 $X$ 의 조건부 밀도는 $2x$ 다. 근방 $\lbrace\lvert Y/X-1\rvert\lt\varepsilon\rbrace$ 은 원점에서 좁고 $(1,1)$ 쪽에서 넓은 부채꼴이다.

## 확률 0 이 아닌 조건

$P(B)\gt 0$ 인 사건 $B$ 에 대한 $P(A\mid B)=P(A\cap B)/P(B)$ 는 $B$ 만으로 정해진다. $B$ 를 $\lbrace Z\in C\rbrace$ 로 적든 $\lbrace W\in D\rbrace$ 로 적든 값이 같다. 역설은 확률이 $0$ 인 조건에서만 생긴다.

# 활용

- 정칙 조건부 분포의 선택. 사후분포와 조건부 독립은 조건부 기댓값의 정칙 조건부 분포로 정의되고, 한 관측값에서의 사후분포는 연속인 판으로 읽는다. 연속인 판은 어느 변수로 관측을 적는지에 따라 정해지므로, 모형을 세울 때 관측되는 양을 변수로 고정한다.
- 곡면 위의 조건화. 함수 $H$ 의 등위면 $\lbrace H=E\rbrace$ 위로 조건을 걸면, 얇은 껍질 $\lbrace E\lt H\lt E+\delta\rbrace$ 의 극한은 곡면 넓이에 $1/\lvert\nabla H\rvert$ 를 곱한 분포다. 통계역학에서 에너지가 $E$ 인 상태의 소정준 분포(microcanonical distribution)가 이 꼴이고, 곡면 넓이에 비례하는 균등분포와 다르다.
- 기하 확률. [Bertrand 역설](bertrand-paradox.md)이 현을 고르는 방법에 따라 확률이 달라지는 것처럼, 이 역설은 영집합에 다가가는 방법에 따라 확률이 달라진다. 두 예 모두 무작위의 대상을 정하는 변수를 먼저 정해야 확률이 정해진다.

[^1]: A. N. Kolmogorov, *Grundbegriffe der Wahrscheinlichkeitsrechnung*, Springer (1933), V 장 2 절. 영역판 *Foundations of the Theory of Probability*, Chelsea (1956), 50–51 쪽.

# 연관 문서

## 선수지식

- [조건부 기댓값](conditional-expectation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#probability #measure_theory
