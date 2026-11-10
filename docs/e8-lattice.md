# E₈ 격자

# 개요

**E₈ 격자(E8 lattice)** 는 8 차원 공간에서 좌표가 모두 정수이거나 모두 정수에 $\tfrac12$ 을 더한 수이고 좌표의 합이 짝수인 점 전체로 이루어진 [격자](lattices.md)다. 8 차원에서 같은 크기의 공을 겹치지 않게 빽빽이 쌓는 문제가 있다. 정수 좌표점마다 공을 놓으면 가장 가까운 두 점의 거리가 $1$ 이라 공의 반지름이 $\tfrac12$ 을 넘지 못한다.

E₈ 격자는 점의 수를 단위 부피당 하나로 유지한 채 가장 가까운 두 점의 거리를 $\sqrt2$ 로 늘린다. 그래서 같은 점의 수로 반지름 $\tfrac{\sqrt2}2$ 인 공을 놓을 수 있고, 이것이 8 차원에서 가장 빽빽한 공 쌓기다.

# 직관

정수 좌표점 전체 $\mathbb Z^8$ 에서 가장 가까운 두 점은 $(0,\dots,0)$ 과 $(1,0,\dots,0)$ 처럼 좌표 하나만 $1$ 다른 점이다. 이런 짝을 없애려고 좌표의 합이 짝수인 점만 남긴다. 그러면 $(1,0,\dots,0)$ 은 빠지고 $(1,1,0,\dots,0)$ 은 남아, 가장 가까운 두 점의 거리가 $\sqrt2$ 가 된다. 그 대신 점의 수가 절반으로 줄었다.

점이 줄어든 자리에 빈 곳이 생긴다. 점 $h=(\tfrac12,\dots,\tfrac12)$ 에서 남은 점 $x$ 까지의 거리의 제곱은 다음과 같다.

$$
\sum_{i=1}^8\Bigl(x_i-\frac12\Bigr)^2
$$

$x_i$ 가 정수이므로 각 항은 $\tfrac14$ 이상이고, 합은 $2$ 이상이다. $h$ 는 남은 점 모두에서 $\sqrt2$ 이상 떨어져 있다.

그래서 남은 점 전체를 $h$ 만큼 옮긴 사본을 더해도 가장 가까운 두 점의 거리는 $\sqrt2$ 그대로다. 사본 안의 두 점의 차는 원래 두 점의 차와 같고, 원래 점과 사본의 점 사이의 거리는 방금 계산한 대로 $\sqrt2$ 이상이다. 점의 수는 다시 두 배가 되어 단위 부피당 하나로 돌아온다. 이렇게 모은 점 전체가 E₈ 격자다.

# 정의

## E₈ 격자

$h=(\tfrac12,\dots,\tfrac12)$ 로 두고 다음 두 집합을 정의한다.

$$
D_8=\Bigl\lbrace x\in\mathbb Z^8:\ \sum_{i=1}^8 x_i\equiv 0\pmod 2\Bigr\rbrace,\qquad E_8=D_8\cup(D_8+h)
$$

$D_8$ 을 **D₈ 격자(D8 lattice)**, $E_8$ 을 **E₈ 격자** 라 한다. $D_8$ 은 직관 절에서 좌표의 합이 짝수인 점만 남긴 것이고, $D_8+h$ 는 그 사본이다. $D_8+h$ 의 점은 좌표가 모두 정수에 $\tfrac12$ 을 더한 수이고 좌표의 합이 짝수인 점이다.

$h+h=(1,\dots,1)$ 은 좌표의 합이 $8$ 이라 $D_8$ 에 든다. 따라서 $E_8$ 은 덧셈과 부호 바꾸기에 닫혀 있고, 선형독립인 벡터 여덟 개의 정수 결합 전체로 적히는 격자다.

$(1,1,0,0,0,0,0,0)$ 은 좌표의 합이 $2$ 라 $E_8$ 에 든다. $(-\tfrac12,-\tfrac12,\tfrac12,\dots,\tfrac12)$ 는 좌표의 합이 $2$ 라 든다. $(1,0,\dots,0)$ 과 $(-\tfrac12,\tfrac12,\dots,\tfrac12)$ 는 좌표의 합이 $1$ 과 $3$ 이라 빠진다.

## 짝 격자와 유니모듈러 격자

격자 $L$ 의 모든 벡터 $x$ 에서 $\Vert x\Vert^2$ 이 짝수이면 $L$ 을 **짝 격자(even lattice)** 라 한다. $L$ 의 두 벡터의 내적이 모두 정수이고 $\det L=1$ 이면 $L$ 을 **유니모듈러 격자(unimodular lattice)** 라 한다. 이때 쌍대격자 $L^\ast$ 가 $L$ 과 같다.

$E_8$ 은 짝 유니모듈러 격자다. $x\in D_8$ 이면 $x_i^2\equiv x_i\pmod 2$ 이므로 $\Vert x\Vert^2$ 은 좌표의 합과 홀짝이 같아 짝수다. $x=y+h$ ($y\in D_8$) 이면 다음이 나온다.

$$
\Vert x\Vert^2=\sum_{i=1}^8 y_i(y_i+1)+2
$$

$y_i(y_i+1)$ 은 연속한 두 정수의 곱이라 짝수이므로 $\Vert x\Vert^2$ 도 짝수다. 길이의 제곱이 모두 짝수이면 다음 식에서 내적이 정수다.

$$
\langle x,y\rangle=\frac12\Bigl(\Vert x+y\Vert^2-\Vert x\Vert^2-\Vert y\Vert^2\Bigr)
$$

$D_8$ 은 $\mathbb Z^8$ 의 절반이라 $\det D_8=2$ 이고, $E_8$ 은 $D_8$ 의 두 배라 $\det E_8=1$ 이다.

## 근

짝 격자에서 길이의 제곱이 $2$ 인 벡터를 **근(root)** 이라 한다. $E_8$ 에서 가장 짧은 $0$ 아닌 벡터가 근이다. 근은 두 꼴이다.

- 정수 꼴. $\pm1$ 두 개와 $0$ 여섯 개. 자리 $\binom82=28$ 가지와 부호 $4$ 가지로 $112$ 개.
- 반정수 꼴. $\pm\tfrac12$ 여덟 개이고 음수의 개수가 짝수. $2^7=128$ 개.

합이 $240$ 이다. 직관 절의 $(1,1,0,\dots,0)$ 과 $h$ 가 각각 두 꼴의 근이다.

## Construction A

$C$ 를 [자기쌍대 부호](self-dual-codes.md)의 직관 절에 나오는 길이 $8$ 의 확장 Hamming 부호(extended Hamming code)로 둔다. 부호어 $16$ 개의 무게는 $0$ 하나, $4$ 열넷, $8$ 하나다. 다음 격자를 $C$ 의 **Construction A** 라 한다.

$$
L_C=\frac1{\sqrt2}\Bigl\lbrace v\in\mathbb Z^8:\ v\bmod 2\in C\Bigr\rbrace
$$

부호어 $11110000$ 에서 $v=(1,1,1,1,0,0,0,0)$ 을 잡으면 $v/\sqrt2$ 의 길이의 제곱은 $2$ 다. $L_C$ 의 근은 $\pm2$ 하나와 $0$ 일곱 개인 $v$ 에서 $16$ 개, 무게 $4$ 부호어의 자리에 $\pm1$ 을 놓은 $v$ 에서 $14\cdot2^4=224$ 개로, 합이 $240$ 이다.

# 성질

## 8 차원의 유일성

정리. 8 차원 짝 유니모듈러 격자는 직교변환으로 $E_8$ 과 겹치는 것 하나뿐이다[^1].

증명의 요지. 8 차원 짝 유니모듈러 격자 $L$ 의 [theta 급수](theta-series.md)는 무게 $4$ 의 [모듈러 형식](modular-forms.md)이다. 무게 $4$ 의 모듈러 형식은 [Eisenstein 급수](eisenstein-series.md) $E_4$ 의 상수배뿐이고 상수항이 $1$ 이므로 $\Theta_L=E_4$ 이고, $L$ 의 근은 $240$ 개다. 짝 격자의 근 전체는 모든 근의 길이가 같은 [근계](root-systems.md)를 이루고, 계수 $8$ 이하의 그런 근계 가운데 근이 $240$ 개인 것은 $E_8$ 하나다. 근계 $E_8$ 의 근이 생성하는 격자는 행렬식이 $1$ 이므로 $L$ 전체와 같다.

$L_C$ 도 8 차원 짝 유니모듈러 격자다. 홀수의 제곱은 법 $4$ 로 $1$, 짝수의 제곱은 $0$ 이므로 $\Vert v\Vert^2$ 은 법 $4$ 로 $v\bmod 2$ 의 무게와 같고, 무게가 모두 $4$ 의 배수라 $\Vert v/\sqrt2\Vert^2$ 이 짝수다. $v$ 의 집합은 $\mathbb Z^8$ 에서 지수가 $2^8/16=16$ 이고 $\tfrac1{\sqrt2}$ 배가 부피를 $2^{-4}$ 배 하므로 $\det L_C=1$ 이다. 따라서 $L_C$ 는 $E_8$ 과 겹친다.

## theta 급수

$E_8$ 의 theta 급수는 다음과 같다. $\sigma_3(m)$ 은 $m$ 의 약수의 세제곱의 합이다.

$$
\begin{aligned}
\Theta_{E_8}(q)&=\sum_{x\in E_8}q^{\Vert x\Vert^2/2}=1+240\sum_{m\ge1}\sigma_3(m)q^m\cr
&=1+240q+2160q^2+6720q^3+\cdots
\end{aligned}
$$

$q^2$ 의 계수 $2160=240\cdot\sigma_3(2)$ 는 길이의 제곱이 $4$ 인 벡터의 수이고, 손으로 세면 다음과 같다.

| 꼴 | 개수 |
| --- | --- |
| $\pm2$ 하나, $0$ 일곱 | $16$ |
| $\pm1$ 넷, $0$ 넷 | $\binom84\cdot2^4=1120$ |
| $\pm\tfrac32$ 하나, $\pm\tfrac12$ 일곱 | $8\cdot2^7=1024$ |

셋째 줄에서 부호 $2^8$ 가지 가운데 좌표의 합이 짝수인 것이 절반이다.

## 근계와 자기동형군

$E_8$ 의 근 $240$ 개는 근계 $E_8$ 을 이루고, 근의 정수 결합이 $E_8$ 전체다. $D_8$ 은 정수 꼴 근이 생성하고, $h$ 는 반정수 꼴 근이다.

$E_8$ 을 자신으로 보내는 직교변환 전체, 곧 **자기동형군(automorphism group)** 은 근계의 Weyl 군(Weyl group) $W(E_8)$ 과 같다. 위수는 다음이다.

$$
\vert W(E_8)\vert=696729600=2^{14}\cdot3^5\cdot5^2\cdot7
$$

## 구 채우기

$E_8$ 의 점마다 반지름 $\tfrac{\sqrt2}2$ 인 공을 놓으면 공이 겹치지 않고, 기본영역의 부피가 $1$ 이므로 [구 채우기](sphere-packing.md)의 밀도는 반지름 $\tfrac{\sqrt2}2$ 인 8 차원 공의 부피와 같다.

$$
\frac{\pi^4}{24}\Bigl(\frac{\sqrt2}2\Bigr)^8=\frac{\pi^4}{384}\approx 0.2537
$$

8 차원에서 격자가 아닌 것을 포함한 모든 구 채우기 가운데 이 밀도가 최대다. M. Viazovska 가 2016 년에 증명했다[^2].

공 하나에 닿는 공은 근의 개수만큼 있어 $240$ 개다. 8 차원에서 단위 공 하나에 겹치지 않게 닿을 수 있는 단위 공의 최대 개수, 곧 접촉수(kissing number)가 $240$ 이다[^3].

# 활용

- [교차형식](intersection-form.md). 짝 유니모듈러 정부호 교차형식의 가장 작은 예가 $E_8$ 이다. [Freedman 정리](freedman-theorem.md)는 교차형식이 $E_8$ 인 닫힌 위상 4 차원 다양체가 존재함을 보이고, Donaldson 정리(Donaldson's theorem)는 그 다양체에 매끄러운 구조가 없음을 보인다.
- [질량 공식](mass-formula.md). 8 차원 짝 유니모듈러 격자의 질량이 $1/\vert W(E_8)\vert$ 이고, 유일성 정리와 같은 결론이 나온다.
- [Niemeier 격자](niemeier-lattices.md). 24 차원 짝 유니모듈러 격자 가운데 $E_8\oplus E_8\oplus E_8$ 이 있고, 16 차원의 두 짝 유니모듈러 격자 가운데 하나가 $E_8\oplus E_8$ 이다.
- [Lie 대수](lie-algebras.md). 근계 $E_8$ 에서 차원 $240+8=248$ 인 예외 단순 Lie 대수 $\mathfrak e_8$ 이 정의된다.

[^1]: J.-P. Serre, *A Course in Arithmetic*, Graduate Texts in Mathematics 7, Springer, 1973, Ch. VII §6.
[^2]: M. S. Viazovska, "The sphere packing problem in dimension 8", *Annals of Mathematics* 185 (2017), 991–1015.
[^3]: A. M. Odlyzko, N. J. A. Sloane, "New bounds on the number of unit spheres that can touch a unit sphere in n dimensions", *Journal of Combinatorial Theory, Series A* 26 (1979), 210–214.

# 연관 문서

## 선수지식

- [격자](lattices.md)
- [자기쌍대 부호](self-dual-codes.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #combinatorics #linear_algebra
