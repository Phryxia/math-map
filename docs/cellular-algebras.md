# 세포대수

# 개요

세포대수는 반단순이 아니어도 기약 가군을 분류할 수 있게 하는 기저를 가진 결합대수다. 기저가 $C^\lambda\_{ST}$ 꼴로 매개되고 곱셈이 $\lambda$ 에 대한 순서를 따라 삼각형이며, 대합 하나가 $S$ 와 $T$ 를 맞바꾼다.

각 $\lambda$ 마다 세포 가군 $W(\lambda)$ 와 그 위의 쌍선형형식 $\Phi\_\lambda$ 가 딸려 나오고, $\Phi\_\lambda\ne 0$ 인 $\lambda$ 가 기약 가군을 하나씩 준다. [Brauer 대수](brauer-algebras.md), Temperley–Lieb 대수, Hecke 대수가 모두 이 구조를 갖는다.

# 직관

$TL_2(\delta)$ 의 기약 가군을 센다. 기저는 수직선 두 개인 도형 $1$ 과 양쪽을 묶은 도형 $e_1$ 둘이고 관계는 $e_1^2=\delta e_1$ 하나다. $\delta\ne 0$ 이면 $\delta^{-1}e_1$ 이 멱등원이라 대수가 $\mathbb C\oplus\mathbb C$ 로 쪼개지고 기약 가군이 둘이다.

$\delta=0$ 에서는 $e_1^2=0$ 이다. 거듭제곱이 $0$ 이 되는 원소가 있으면 대수가 반단순이 아니므로 Wedderburn 분해로 기약 가군을 셀 수 없다. 직접 세면 $\mathbb C\lbrack e\rbrack/(e^2)$ 의 기약 가군은 $e$ 를 $0$ 으로 보내는 $1$ 차원 하나뿐이고, 차원 제곱의 합이 $1$ 이라 대수의 차원 $2$ 와 맞지 않는다.

둘을 가른 것은 $e_1$ 을 두 번 쌓을 때 나오는 수 $\delta$ 다. 이 수를 기저에서 직접 읽는다. 도형을 아래로 내려가지 않는 선의 개수 $r$ 로 나누면 $1$ 은 $r=2$ , $e_1$ 은 $r=0$ 이고, $r$ 이 작은 도형들이 이념을 이루므로 $r$ 이 큰 쪽부터 층을 벗길 수 있다. 각 층은 반쪽 도형 하나짜리 공간이고, 반쪽 둘을 맞붙여 나오는 수가 그 층의 쌍선형형식이다.

$r=0$ 층에서 반쪽을 맞붙이면 고리 하나가 생겨 값이 $\delta$ 다. $\delta=0$ 이면 이 층의 형식이 $0$ 이고 그 층은 기약 가군을 내놓지 않는다. $r=2$ 층은 고리가 생기지 않아 값이 $1$ 이므로 언제나 기약 가군 하나를 준다. 층을 세는 이 절차가 반단순성과 무관하게 작동하는 것이 세포 구조다.

# 정의

## 세포 기저

$R$ 가 가환환이고 $A$ 가 $R$ 대수다. 유한 부분순서집합 $\Lambda$ 와 각 $\lambda\in\Lambda$ 마다 유한집합 $M(\lambda)$ 가 있고, 원소

$$
C^{\lambda}\_{ST}\qquad (\lambda\in\Lambda,\ S,T\in M(\lambda))
$$

들이 $A$ 의 $R$ 자유기저이며 다음 셋이 성립하면 이 기저를 **세포 기저**라 하고 $A$ 를 **세포대수(cellular algebra)** 라 한다[^1].

$R$ 선형 대합 $i\colon A\to A$ 가 있어 $i(C^{\lambda}\_{ST})=C^{\lambda}\_{TS}$ 다. 그리고 모든 $a\in A$ 에 대해

$$
aC^{\lambda}\_{ST}\equiv\sum\_{S'\in M(\lambda)}r_a(S',S)\thinspace C^{\lambda}\_{S'T}\pmod{A^{\lt \lambda}}
$$

이고 계수 $r_a(S',S)\in R$ 가 $T$ 에 의존하지 않는다. $A^{\lt \lambda}$ 는 $\mu\lt \lambda$ 인 기저원소들이 생성하는 $R$ 부분가군이고, 위 식에서 양쪽 이념임이 따라 나온다.

## 세포 가군

$\lambda$ 에 대해 $W(\lambda)$ 를 기저 $\lbrace C_S:S\in M(\lambda)\rbrace$ 의 자유 $R$ 가군으로 두고 작용을 $a\thinspace C_S=\sum\_{S'}r_a(S',S)C\_{S'}$ 로 정의한다. 이것이 **세포 가군**이다. 정의가 잘 되는 것은 계수가 $T$ 에 의존하지 않기 때문이고, $T$ 를 하나 고정하면 $W(\lambda)$ 가 $A^{\le\lambda}/A^{\lt \lambda}$ 의 직합인자로 실현된다.

## 쌍선형형식

$C^{\lambda}\_{ST}C^{\lambda}\_{UV}\equiv\Phi\_\lambda(T,U)\thinspace C^{\lambda}\_{SV}\pmod{A^{\lt \lambda}}$ 로 결정되는 $\Phi\_\lambda\colon M(\lambda)\times M(\lambda)\to R$ 를 $W(\lambda)$ 의 쌍선형형식이라 한다. 대합 $i$ 에서 $\Phi\_\lambda$ 가 대칭이다.

# 성질

## 기약 가군의 분류

> **정리 (Graham–Lehrer).** $R$ 가 체일 때 $\Phi\_\lambda\ne 0$ 인 $\lambda$ 를 모은 집합 $\Lambda_0$ 에 대해 $L(\lambda)=W(\lambda)/\mathrm{rad}\thinspace\Phi\_\lambda$ 들이 $A$ 의 기약 가군 전부이고 서로 동형이 아니다[^1].

증명의 요지. $\mathrm{rad}\thinspace\Phi\_\lambda=\lbrace x\in W(\lambda):\Phi\_\lambda(x,y)=0\ \forall y\rbrace$ 가 부분가군임은 형식의 불변성에서 나온다. $\Phi\_\lambda\ne 0$ 이면 몫이 $0$ 이 아니고 단순하다. $L(\lambda)$ 는 $A^{\le\lambda}$ 로는 살아 있고 $A^{\lt \lambda}$ 로는 죽으므로 $\lambda$ 를 되찾을 수 있고, 따라서 서로 다른 $\lambda$ 의 몫은 동형이 아니다. 임의의 단순 가군은 $A^{\le\lambda}$ 가 그 위에 $0$ 이 아니게 작용하는 최소의 $\lambda$ 를 잡으면 $L(\lambda)$ 와 동형이다.

## 분해행렬의 삼각성

중복도 $d\_{\lambda\mu}=\lbrack W(\lambda):L(\mu)\rbrack$ 를 모은 행렬은 $d\_{\lambda\lambda}=1$ 이고 $\mu\not\le\lambda$ 이면 $d\_{\lambda\mu}=0$ 이라 단일 삼각이다[^1]. 따라서 가역이고, 세포 가군의 지표에서 기약 지표를 되찾는 계산이 역행렬 하나로 끝난다.

## 반단순성의 판정

$A$ 가 반단순일 필요충분조건은 모든 $\lambda$ 에 대해 $\Phi\_\lambda$ 가 비퇴화인 것이다[^1]. 이 경우 $\Lambda_0=\Lambda$ 이고 $W(\lambda)=L(\lambda)$ 이며 $\sum\_\lambda\vert M(\lambda)\vert^2=\dim A$ 가 성립한다.

## 대합의 효과

$i$ 가 있으므로 $A$ 와 반대대수가 동형이고 왼쪽 가군의 분류가 오른쪽 가군의 분류와 같다. 쌍대 $L(\lambda)^\ast$ 가 다시 $L(\lambda)$ 이므로 분해행렬이 한 번만 계산된다.

# 활용

## 도형 대수

Brauer 대수와 Temperley–Lieb 대수에서 $\Lambda$ 는 아래로 내려가지 않는 선의 개수로 걸러진 지표이고 $M(\lambda)$ 는 반쪽 도형이다. 두 반쪽을 맞붙일 때 생기는 고리의 개수가 $\Phi\_\lambda$ 를 $\delta$ 의 거듭제곱으로 준다. 매개변수가 특수한 값일 때 반단순성이 깨지는 현상이 $\Phi\_\lambda=0$ 으로 읽힌다.

## 대칭군의 Specht 가군

군환 $\mathbb Z\lbrack S_n\rbrack$ 의 Murphy 기저가 세포 기저이고 $\Lambda$ 는 지배순서를 준 $n$ 의 [분할](partitions.md)이다[^2]. 세포 가군이 Specht 가군이고, 표수 $p$ 에서 $\Phi\_\lambda\ne 0$ 인 분할이 $p$ 정칙 분할이다. 모듈러 표현의 분해행렬이 삼각이라는 것이 이 구조에서 바로 나온다.

## Hecke 대수

$A$ 형 Hecke 대수의 Kazhdan–Lusztig 기저가 세포 기저이고, 이 사실이 세포대수라는 이름의 유래다[^1]. 매개변수가 $1$ 의 거듭제곱근일 때 기약 가군의 수가 줄어드는 것을 $\Lambda_0$ 가 작아지는 것으로 센다.

[^1]: 원논문은 J. Graham, G. Lehrer, *Cellular algebras*, Invent. Math. **123** (1996), 1–34. 도형 대수의 세포 구조와 Hecke 대수의 예가 같은 논문에 있다.

[^2]: Murphy 기저가 세포 기저라는 것은 A. Mathas, *Iwahori–Hecke Algebras and Schur Algebras of the Symmetric Group*, AMS University Lecture Series **15** (1999), 3장.

# 연관 문서

## 선수지식

- [가군](modules.md)

## 더 알아보기

- [Brauer 대수](brauer-algebras.md)

#algebra #ring_theory #combinatorics #group_theory
