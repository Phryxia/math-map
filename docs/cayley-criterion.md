# Cayley 조건

# 개요

**Cayley 조건(Cayley's criterion)** 은 두 원뿔곡선의 방정식만으로 Poncelet 꺾은선이 몇 단계에서 닫히는지 판정하는 공식이다. 반지름 $\sqrt2$ 인 원 안에 같은 중심으로 반지름 $1$ 인 원을 그리면 바깥 원에 내접하고 안쪽 원에 외접하는 정사각형이 생기는데, 중심이 어긋난 두 원이나 두 타원에서는 꺾은선을 그려 보지 않고 닫히는지 알기 어렵다. Cayley 조건은 두 곡선의 행렬로 만든 함수 하나를 거듭제곱급수로 전개하고, 그 계수로 만든 행렬식이 $0$ 인지로 답한다.

# 직관

[Poncelet 폐형 정리](poncelet-porism.md) 문서의 두 원을 쓴다. 바깥 원 $C$ 는 반지름 $R=5/2$, 안쪽 원 $D$ 는 반지름 $r=1$ 이고, 두 중심의 거리는 $d=\sqrt5/2$ 다. 좌표를 옮겨 $C$ 의 중심을 원점에, $D$ 의 중심을 $(d,0)$ 에 둔다.

원의 방정식 $x^2+y^2-R^2=0$ 은 $(x,y,1)$ 에 대칭행렬을 양쪽에서 곱한 꼴로 적힌다. 두 원의 행렬은 다음과 같다.

$$
C=\begin{pmatrix}1&0&0\cr 0&1&0\cr 0&0&-R^2\end{pmatrix},\qquad
D=\begin{pmatrix}1&0&-d\cr 0&1&0\cr -d&0&d^2-r^2\end{pmatrix}
$$

$R=5/2$, $r=1$, $d^2=5/4$ 를 넣으면 $tC+D$ 의 행렬식은 다음과 같다.

$$
\det(tC+D)=-\Bigl(1+7t+\tfrac{49}{4}t^2+\tfrac{25}{4}t^3\Bigr)
$$

앞의 부호와 상수배는 판정에 쓰이지 않으므로 괄호 안의 다항식 $g(t)$ 의 제곱근을 $t=0$ 에서 전개한다. $g(t)=(1+\tfrac72t)^2+\tfrac{25}{4}t^3$ 이므로 다음이 나온다.

$$
\sqrt{g(t)}=1+\tfrac72t+0\cdot t^2+\cdots
$$

$t^2$ 의 계수가 $0$ 이다. 이 두 원은 직각삼각형 $(0,0)$, $(4,0)$, $(0,3)$ 의 외접원과 내접원이고, 꺾은선은 세 단계에서 닫힌다. Cayley 조건에서 세 단계에서 닫히는 조건이 이 $t^2$ 의 계수가 $0$ 인 것이다.

정사각형의 두 원 $R=\sqrt2$, $r=1$, $d=0$ 에서는 $tC+D$ 가 대각행렬이고 행렬식이 다음과 같다.

$$
\det(tC+D)=-(1+t)^2(1+2t)
$$

제곱근의 전개는 다음과 같다.

$$
(1+t)\sqrt{1+2t}=1+2t+\tfrac12t^2+0\cdot t^3-\tfrac18t^4+\cdots
$$

$t^2$ 의 계수가 $0$ 이 아니어서 삼각형으로는 닫히지 않고, $t^3$ 의 계수가 $0$ 이어서 네 단계에서 닫힌다.

# 정의

## 원뿔곡선의 행렬

사영평면의 원뿔곡선은 $3\times 3$ 대칭행렬 $M$ 으로 $v^{\mathsf T}Mv=0$ 꼴로 적힌다. 여기서 $v=(x,y,z)$ 는 점의 동차좌표다. $M$ 에 $0$ 이 아닌 수를 곱해도 같은 곡선이다. 직관 절의 $C$ 와 $D$ 가 두 원의 행렬이다.

## Cayley 계수

[원뿔곡선](conic-sections.md) $C$ 와 $D$ 가 [Poncelet 폐형 정리](poncelet-porism.md) 문서의 일반적인 위치에 있고 $\det D\ne 0$ 이라 한다. $t=0$ 근처에서 다음 전개를 쓴다.

$$
\sqrt{\det(tC+D)}=A_0+A_1t+A_2t^2+A_3t^3+\cdots
$$

$A_0=\sqrt{\det D}\ne 0$ 이므로 제곱근은 $t=0$ 근처에서 거듭제곱급수로 정의된다. 제곱근의 부호와 두 행렬의 상수배는 계수 전체에 같은 상수를 곱할 뿐이다. 계수 $A_k$ 를 **Cayley 계수** 라 한다. 직관 절의 삼각형 예에서는 $A_0=1$, $A_1=7/2$, $A_2=0$ 이다.

## 조건

$C$ 에 내접하고 $D$ 에 외접하는 Poncelet 꺾은선이 $n$ 단계에서 닫히는 조건을 **Cayley 조건** 이라 한다. $n\ge 3$ 일 때 조건은 다음과 같다.

$$
\begin{aligned}
n=2m+1:&\quad \det\begin{pmatrix}A_2&\cdots&A_{m+1}\cr \vdots&&\vdots\cr A_{m+1}&\cdots&A_{2m}\end{pmatrix}=0\cr
n=2m:&\quad \det\begin{pmatrix}A_3&\cdots&A_{m+1}\cr \vdots&&\vdots\cr A_{m+1}&\cdots&A_{2m-1}\end{pmatrix}=0
\end{aligned}
$$

각 행렬은 $i+j$ 가 같은 자리에 같은 수가 오는 Hankel 행렬이다. 처음 몇 개는 다음과 같다.

| 단계 | 조건 |
| --- | --- |
| $3$ | $A_2=0$ |
| $4$ | $A_3=0$ |
| $5$ | $A_2A_4-A_3^2=0$ |
| $6$ | $A_3A_5-A_4^2=0$ |

직관 절의 삼각형 예는 $3$ 단계의 조건을, 정사각형 예는 $4$ 단계의 조건을 만족한다.

# 성질

## Cayley 정리

일반적인 위치의 두 원뿔곡선에 대해, $C$ 에 내접하고 $D$ 에 외접하는 꺾은선이 $n$ 단계에서 닫히는 것은 정의 절의 조건과 동치다. Cayley 가 1853 년에 진술했고, Griffiths 와 Harris 가 타원곡선의 덧셈으로 증명했다[^1].

증명의 요지. Poncelet 폐형 정리 문서의 대응 곡선 $E$ 는 다음 곡선과 같은 타원곡선이다.

$$
y^2=\det(tC+D)
$$

이 곡선의 무한원점을 $O$, $t=0$ 인 점 $(0,A_0)$ 을 $P_0$ 이라 하면, 꺾은선의 한 단계는 $P_0-O$ 만큼의 평행이동이다. 그래서 $n$ 단계에서 닫히는 것은 $n(P_0-O)=0$, 곧 $O$ 에서만 극을 갖고 그 위수가 $n$ 이하이며 $P_0$ 에서 위수 $n$ 의 영점을 갖는 유리함수가 있는 것과 동치다.

$n=2m+1$ 이면 [Riemann–Roch 정리](riemann-roch.md)에 따라 그런 함수는 다음 꼴이다.

$$
f=p(t)+q(t)\thinspace y,\qquad \deg p\le m,\quad \deg q\le m-1
$$

$t$ 가 $P_0$ 의 국소 좌표이고 $y=\sum A_kt^k$ 이므로, $f$ 의 전개에서 $t^0,\dots,t^{2m}$ 의 계수가 모두 $0$ 이어야 한다. $p$ 의 계수로 $t^0,\dots,t^m$ 의 계수를 지울 수 있고, 남은 $t^{m+1},\dots,t^{2m}$ 의 $m$ 개 식은 $q$ 의 $m$ 개 계수에 대한 연립일차방정식이다. 그 계수행렬이 $A_2,\dots,A_{2m}$ 의 Hankel 행렬이므로, $0$ 이 아닌 $q$ 가 있는 것은 그 [행렬식](determinants.md)이 $0$ 인 것과 동치다. $n=2m$ 이면 $\deg q\le m-2$ 로 같은 계산을 하고, $A_3,\dots,A_{2m-1}$ 의 행렬이 나온다.

## Euler 삼각형 공식과 Fuss 관계

반지름 $R$ 인 원 안에 반지름 $r$ 인 원이 있고 두 중심의 거리가 $d$ 이면, 직관 절의 행렬로 다음이 나온다.

$$
\det(tC+D)=-r^2(1+t)\bigl(1+\alpha t+\beta t^2\bigr),\qquad \alpha=\frac{R^2+r^2-d^2}{r^2},\quad \beta=\frac{R^2}{r^2}
$$

$t^2$ 의 계수는 $(\alpha+\beta)/2-(1+\alpha)^2/8$ 이고, 이것이 $0$ 인 식은 $(R^2-d^2)^2=4R^2r^2$ 으로 정리된다. 안쪽 원이 바깥 원 안에 있으므로 $R^2-d^2=2Rr$ 이고, 이것이 [Euler 삼각형 공식](euler-triangle-formula.md)이다.

같은 행렬에서 $A_3=0$ 은 Poncelet 폐형 정리 문서의 Fuss 관계와 같다.

$$
\frac{1}{(R-d)^2}+\frac{1}{(R+d)^2}=\frac{1}{r^2}
$$

## 같은 중심의 두 원

$d=0$ 이면 꺾은선은 회전이므로 $n$ 단계에서 닫히는 것은 $r=R\cos(k\pi/n)$ 인 정수 $k$ 가 있는 것과 같다. 이때 Cayley 계수는 다음 전개의 계수다.

$$
\sqrt{(1+t)^2\bigl(1+\beta t\bigr)}=(1+t)\sqrt{1+\beta t},\qquad \beta=\frac{R^2}{r^2}
$$

$\beta=2$ 이면 $A_3=0$ 이고 $r=R\cos(\pi/4)$ 의 정사각형이다. $\beta=4$ 이면 $A_2=0$ 이고 $r=R\cos(\pi/3)$ 의 정삼각형이다.

# 활용

- [쌍심 사각형](bicentric-quadrilateral.md)과 쌍심 다각형. 한 원에 내접하고 다른 원에 외접하는 $n$ 각형이 있을 조건을 $R$, $r$, $d$ 의 식으로 쓸 때 Cayley 계수를 전개한다. $3$ 과 $4$ 에서 Euler 삼각형 공식과 Fuss 관계가 나오고, $5$ 와 $6$ 에서도 같은 방법으로 두 원의 관계식이 나온다.
- [타원 당구](elliptic-billiards.md)의 주기 궤도. 당구대 타원을 $C$ 로, 공의 궤적이 닿는 공초점 원뿔곡선을 $D$ 로 놓으면, 주기 $n$ 의 궤도가 있는 조건이 Cayley 조건이다.
- 타원곡선의 비틀림 점. 증명의 계산은 $y^2=f(t)$ 꼴 곡선 위의 점이 위수 $n$ 인지를 그 점에서 전개한 $y$ 의 계수로 판정하는 방법이다.

[^1]: P. Griffiths, J. Harris, On Cayley's explicit solution to Poncelet's porism, L'Enseignement Mathématique 24 (1978), 31–40.

# 연관 문서

## 선수지식

- [Poncelet 폐형 정리](poncelet-porism.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #number_theory #combinatorics
