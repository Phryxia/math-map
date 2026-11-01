# 땋임군

# 개요

**땋임군(braid group)** $B_n$ 은 $n$ 가닥의 끈을 꼬는 방법들이 이루는 군이다. 끈 세 가닥의 양 끝을 위아래 막대에 묶고 이웃한 두 가닥을 엇갈리게 하는 조작을 거듭할 때, 조작을 이어 붙이는 것이 곱이고 거꾸로 푸는 것이 역원이다. 땋임의 위아래 끝을 이으면 매듭이나 링크가 나오므로, 땋임군을 쓰면 매듭을 그림 대신 군의 원소로 적어 계산할 수 있다.

# 직관

끈 세 가닥의 위 끝을 막대에 왼쪽부터 1, 2, 3 자리로 묶고 아래로 늘어뜨린다. 1 자리의 가닥을 2 자리의 가닥 위로 넘겨 두 가닥의 자리를 바꾸는 조작을 $\sigma_1$, 2 자리와 3 자리의 가닥을 같은 방식으로 바꾸는 조작을 $\sigma_2$ 라 한다. 조작을 차례로 하면 꼬임이 아래로 쌓이고, 아래 끝을 다른 막대에 묶으면 그림 하나가 남는다. 가닥은 아래로만 내려가고, 교차할 때마다 어느 가닥이 위인지 기록된다.

두 그림을 세로로 이어 붙이면 새 그림이 되고, 그림을 위아래로 뒤집어 이어 붙이면 꼬임이 풀린다. $\sigma_1$ 을 두 번 하면 두 가닥이 서로 한 바퀴 감겨 풀리지 않는다. 가닥이 어느 자리에서 끝나는지만 보고 교차의 위아래를 잊으면 $\sigma_1$ 두 번은 아무것도 하지 않은 것과 같아지고, 조작은 1, 2, 3 의 순서 바꾸기가 된다.

$\sigma_1\sigma_2\sigma_1$ 과 $\sigma_2\sigma_1\sigma_2$ 를 그려 보면 두 그림 모두 1 자리에서 출발한 가닥이 다른 두 가닥 위를 지나고, 3 자리에서 출발한 가닥이 다른 두 가닥 아래를 지난다. 가운데 가닥을 옆으로 밀면 한 그림이 다른 그림으로 옮겨지므로 두 조작은 같은 땋임이다. 세 가닥의 땋임 사이의 같음은 이 관계 하나로 전부 설명된다.

두 가닥에서 $\sigma_1$ 을 세 번 하고 아래쪽 두 끝을 바깥으로 돌려 위쪽 두 끝에 이으면 삼엽매듭(trefoil)이 나온다. [매듭 불변량](knot-invariants.md)은 매듭 그림과 그림을 바꾸는 세 가지 이동으로 정의되므로, 그림 대신 땋임을 쓰면 매듭이 $\sigma_1\sigma_1\sigma_1$ 같은 낱말이 된다. 모든 링크가 이렇게 땋임에서 나오고, 두 땋임이 같은 링크를 주는 것은 두 땋임이 켤레를 취하는 이동과 가닥 하나를 더해 한 번 꼬는 이동으로 이어지는 것과 같다. 이 두 사실이 Alexander 정리(Alexander's theorem)와 Markov 정리(Markov's theorem)다.

# 정의

## 땋임군

$$
B_n=\bigl\langle \sigma_1,\dots,\sigma_{n-1}\thickspace\bigm\vert\thickspace\sigma_i\sigma_j=\sigma_j\sigma_i\thinspace\thinspace(\vert i-j\vert\ge2),\thickspace\thickspace\sigma_i\sigma_{i+1}\sigma_i=\sigma_{i+1}\sigma_i\sigma_{i+1}\bigr\rangle
$$

$B_n$ 은 이 [군의 표시](group-presentations.md)로 정의되는 군이다. $\sigma_i$ 는 $i$ 자리의 가닥을 $i+1$ 자리의 가닥 위로 넘기는 꼬임이다. 첫째 관계는 떨어진 두 자리의 꼬임이 서로 간섭하지 않는다는 것이고, 둘째 관계는 직관의 가운데 가닥 밀기다.

- 직관의 세 가닥은 $B_3=\langle\sigma_1,\sigma_2\mid\sigma_1\sigma_2\sigma_1=\sigma_2\sigma_1\sigma_2\rangle$ 다. 떨어진 두 자리가 없으므로 첫째 관계는 없다.
- $B_2=\langle\sigma_1\rangle$ 는 무한 순환군이다. $\sigma_1^k$ 는 두 가닥을 $k$ 번 꼰 것이다.

## 순수 땋임군

각 가닥이 어느 자리에서 끝나는지만 기록하면 준동형 $B_n\to S_n$, $\sigma_i\mapsto(i\thickspace i{+}1)$ 이 정의된다. 이 사상은 [대칭군](symmetric-groups.md) $S_n$ 으로의 전사 준동형이다. 그 핵 $P_n$ 을 **순수 땋임군(pure braid group)** 이라 한다. 모든 가닥이 출발한 자리에서 끝나는 땋임의 군이다.

- $\sigma_1^2\in B_2$ 의 상은 항등순열이므로 $\sigma_1^2\in P_2$ 다. 직관의 "한 바퀴 감긴" 두 가닥이 순수 땋임이다.
- $\sigma_1\sigma_2\sigma_1\in B_3$ 의 상은 $(1\thickspace2)(2\thickspace3)(1\thickspace2)=(1\thickspace3)$ 이다. 직관의 그림에서 1 자리의 가닥이 3 자리에서 끝난다.

## 닫힘과 땋임 지표

$\beta\in B_n$ 의 **닫힘(closure)** $\hat\beta$ 는 위쪽 $i$ 번째 끝과 아래쪽 $i$ 번째 끝을 바깥으로 돌려 이어 만든 링크다. 링크 $L$ 을 닫힘으로 주는 땋임의 가닥 수 가운데 가장 작은 것을 $L$ 의 **땋임 지표(braid index)** 라 한다.

- $\sigma_1^3\in B_2$ 의 닫힘은 삼엽매듭이고, $\sigma_1\in B_2$ 의 닫힘은 풀린 매듭이다.
- $B_1$ 은 자명군이고 그 닫힘은 풀린 매듭뿐이므로 삼엽매듭의 땋임 지표는 $2$ 다.

## Markov 이동

땋임 사이의 다음 두 이동을 **Markov 이동(Markov moves)** 이라 한다.

$$
\text{M1}\colon\thinspace \beta\mapsto\gamma\beta\gamma^{-1}\quad(\beta,\gamma\in B_n),\qquad
\text{M2}\colon\thinspace \beta\in B_n\thinspace\mapsto\thinspace\beta\sigma_n^{\pm1}\in B_{n+1}
$$

M1 은 켤레, M2 는 오른쪽에 가닥 하나를 더하고 $n$ 자리와 새 가닥을 한 번 꼬는 이동이다. M2 의 $\beta$ 는 $\sigma_1,\dots,\sigma_{n-1}$ 의 낱말 그대로 $B_{n+1}$ 의 원소로 본다.

- $B_1$ 의 항등원에 M2 를 하면 $\sigma_1\in B_2$ 가 된다. 둘의 닫힘은 모두 풀린 매듭이다.
- $\sigma_1^3\in B_2$ 에 M2 를 하면 $\sigma_1^3\sigma_2\in B_3$ 이고, 그 닫힘도 삼엽매듭이다.

## Markov 대각합

대수족 $\lbrace A_n\rbrace$ 과 준동형 $\rho_n\colon B_n\to A_n^\times$ 과 선형범함수 $\mathrm{tr}\_n\colon A_n\to R$ 이 두 조건

1. $\mathrm{tr}\_n(ab)=\mathrm{tr}\_n(ba)$ , 곧 M1 에 대한 불변성
2. $\mathrm{tr}\_{n+1}\bigl(\rho_{n+1}(\beta\sigma_n^{\pm1})\bigr)=z_\pm\thinspace\mathrm{tr}\_n\bigl(\rho_n(\beta)\bigr)$ , 곧 M2 에서 정해진 상수배

를 만족하면 $\mathrm{tr}$ 을 **Markov 대각합(Markov trace)** 이라 한다. $w(\beta)$ 를 $\beta$ 의 **지수합(exponent sum)**, 곧 낱말에 나오는 $\sigma_i$ 의 수에서 $\sigma_i^{-1}$ 의 수를 뺀 값이라 하고 $z_\pm$ 에 맞는 상수 $a,b$ 를 잡으면

$$
X(\hat\beta)=a^{\thinspace w(\beta)}b^{\thinspace n-1}\thinspace\mathrm{tr}\_n\bigl(\rho_n(\beta)\bigr)
$$

가 링크 불변량이 된다.

- $A_n$ 을 $S_n$ 의 군대수 $\mathbb Z[x]S_n$, $\rho_n$ 을 순열로 보내는 준동형, $\mathrm{tr}\_n(\pi)=x^{c(\pi)}$ 로 잡는다. $c(\pi)$ 는 순열 $\pi$ 의 순환의 수다. 켤레인 순열은 순환의 수가 같으므로 조건 1 이 성립하고, $\beta\sigma_n$ 은 $\beta$ 의 순환 하나에 새 자리 $n+1$ 을 끼워 넣으므로 $z_\pm=1$ 로 조건 2 가 성립한다. $a=b=1$ 로 얻는 $X(\hat\beta)=x^{c}$ 의 지수 $c$ 는 닫힘의 성분 수다. $\sigma_1^3\in B_2$ 의 상 $(1\thickspace2)$ 는 순환이 하나이므로 삼엽매듭은 성분이 하나이고, $\sigma_1^2$ 의 상은 순환이 둘이므로 그 닫힘은 두 성분의 링크다.
- [Temperley–Lieb 대수](temperley-lieb-algebras.md)와 Jones 대각합을 넣으면 Jones 다항식(Jones polynomial)이, Hecke 대수(Hecke algebra) $H_n(q)$ 와 Ocneanu 대각합을 넣으면 HOMFLY(Hoste–Ocneanu–Millett–Freyd–Lickorish–Yetter) 다항식이 나온다.

# 성질

## 순수 땋임군의 구조

$P_n$ 은 자유군들을 차례로 반직접곱한 군이다(Artin). $P_n$ 의 원소에서 마지막 가닥을 지우면 준동형 $P_n\to P_{n-1}$ 이 나오고, 그 핵은 $n-1$ 개의 구멍이 뚫린 평면을 도는 마지막 가닥들의 군, 곧 계수 $n-1$ 인 자유군이다. 이 사상은 분할되므로 $P_n=F_{n-1}\rtimes P_{n-1}$ 이다.

$B_n$ 은 평면 위 서로 다른 $n$ 점의 배치 공간(configuration space)의 [기본군](fundamental-group.md)이고, 이 공간은 유한 차원 [Eilenberg–MacLane 공간](eilenberg-maclane-spaces.md)이다(Fox–Neuwirth). 유한 차원 Eilenberg–MacLane 공간의 기본군은 꼬임이 없으므로 $B_n$ ($n\ge2$) 은 꼬임 없는(torsion-free) 무한군이다.

## Alexander 정리

모든 링크는 어떤 땋임의 닫힘이다. 링크 도식을 한 축 주위로 모든 가닥이 같은 방향으로 돌도록 고치면 땋임의 닫힘이 된다. 이 대응은 단사가 아니어서 가닥 수가 다른 땋임도 같은 링크를 준다.

## Markov 정리

$\hat\beta=\hat\gamma$ 인 것과 $\beta$ 와 $\gamma$ 가 M1, M2 와 그 역의 유한 열로 이어지는 것이 동치다. 어려운 방향은 이 두 이동으로 충분하다는 쪽이다.[^1]

증명의 요지는 링크 도식을 축 주위로 감기게 고치는 과정의 모든 선택이 M1 과 M2 로 흡수된다는 것이다. 매듭 그림의 세 이동 가운데 둘째와 셋째 이동은 땋임군의 관계식에 들어 있고, 가닥 수를 바꾸는 첫째 이동이 M2 에 대응한다. 불변량에서 지수합 $w(\beta)$ 로 보정하는 것도 첫째 이동을 다루는 일이다.

## Morton–Franks–Williams 부등식

링크 $L$ 의 HOMFLY 다항식의 한 변수 차수 폭을 $s$ 라 하면 땋임 지표는 $s/2+1$ 이상이다. 이것이 Morton–Franks–Williams 부등식(Morton–Franks–Williams inequality)이다.

## Temperley–Lieb 대수의 대각합

Jones 는 $\mathrm{II}\_1$ 인자의 [부분인자](subfactors.md)를 연구하다 Temperley–Lieb 대수 $TL_n(\delta)$ 위에서 Markov 대각합을 찾았다. $B_n\to TL_n$ 은

$$
\sigma_i\longmapsto A+A^{-1}e_i,\qquad e_i^2=\delta e_i,\thickspace e_ie_{i\pm1}e_i=e_i
$$

로 주어진다. $(A+A^{-1}e_i)(A^{-1}+Ae_i)=1+(A^2+A^{-2}+\delta)e_i$ 이므로 $\delta=-A^2-A^{-2}$ 일 때 $\sigma_i^{-1}\mapsto A^{-1}+Ae_i$ 가 역원이 된다. 대각합이 양의 값을 갖는 $\delta$ 를 따지면 부분인자 지표가 $4\cos^2(\pi/m)$ ($m\ge3$) 이거나 $4$ 이상이라는 Jones 지표 정리(Jones index theorem)와 같은 조건이 나온다.

## Burau 표현과 Alexander 다항식

감소 Burau 표현(reduced Burau representation) $\bar\rho\colon B_n\to\mathrm{GL}\_{n-1}(\mathbb Z[t^{\pm1}])$ 를 쓰면 [Alexander 다항식](alexander-polynomial.md)이 [행렬식](determinants.md)으로 나온다.

$$
\Delta_{\hat\beta}(t)\thickspace\doteq\thickspace\det\bigl(I-\bar\rho(\beta)\bigr)\cdot\frac{1-t}{1-t^{n}}
$$

$\doteq$ 는 $\pm t^k$ 배를 무시한다는 뜻이다. $\bar\rho(\sigma_i)$ 는 항등행렬에서 $i$ 행만 바뀌고 그 행의 $(i-1,i,i+1)$ 성분이 차례로 $t,-t,1$ 이며 양 끝 행에서는 없는 자리를 뺀다. $n=2$ 이면 $\bar\rho(\sigma_1)=-t$ 이고, 삼엽매듭 $\widehat{\sigma_1^3}$ 에서 $(1+t^3)(1-t)/(1-t^2)=t^2-t+1$ 이 나온다. $n=3$ 이면

$$
\bar\rho(\sigma_1)=\begin{pmatrix}-t&1\cr 0&1\end{pmatrix},\qquad
\bar\rho(\sigma_2)=\begin{pmatrix}1&0\cr t&-t\end{pmatrix}
$$

이고, 8 자 매듭 $\widehat{\sigma_1\sigma_2^{-1}\sigma_1\sigma_2^{-1}}$ 에서 $t^2-3t+1$ 이 $\pm t^{k}$ 배까지 나온다.

## Burau 표현의 충실성

$n\le3$ 에서 Burau 표현은 충실하고 $n\ge5$ 에서는 충실하지 않다(Bigelow, Long–Paton). $n=4$ 에서 충실한지는 알려져 있지 않다[^2]. 충실하지 않은 원소는 Alexander 다항식이 자명한 값을 주는 닫힌 땋임을 낳으므로, 이 다항식은 링크를 완전히 구별하지 못한다.

Lawrence–Krammer 표현(Lawrence–Krammer representation)은 모든 $n$ 에 대해 충실함이 증명되어(Bigelow, Krammer) 땋임군이 선형군임이 확정되었다. $B_n$ 은 구멍 $n$ 개가 뚫린 원판의 [사상류군](mapping-class-group.md)이고, 사상류군 가운데 선형성이 알려진 것은 드물다.

## 낱말 문제와 켤레 문제

$B_n$ 의 낱말 문제(word problem)는 [Garside 정규형](garside-normal-form.md), 곧 양의 땋임 반군과 기본 땋임 $\Delta$ 로 다항시간에 풀린다. 켤레 문제(conjugacy problem)도 초정상 집합(super summit set)으로 풀리지만 복잡도가 크다. 이 난이도가 한때 땋임군 기반 암호의 근거로 제안되었으나, 이후 길이 기반 공격이 개발되어 실용적 안전성은 부정적으로 평가된다.

## Yang–Baxter 방정식

$\sigma_i\sigma_{i+1}\sigma_i=\sigma_{i+1}\sigma_i\sigma_{i+1}$ 는 Yang–Baxter 방정식(Yang–Baxter equation)의 군론적 형태다. 땋임군의 표현은 적분가능 격자모형의 전달행렬, [양자군](quantum-groups.md)의 $R$ [행렬](matrices.md), 등각장론의 융합 규칙에서 같은 모양으로 나타난다. [Reshetikhin–Turaev 불변량](reshetikhin-turaev.md)은 양자군의 표현[범주](category.md) 하나에서 링크와 3 [다양체](manifolds.md) 불변량을 함께 정의한다.

# 활용

## 불변량의 목록

| 대수 | 대각합 | 불변량 |
|---|---|---|
| $\mathbb Z[t^{\pm1}]$ 위 Burau | 행렬식 | Alexander 다항식 |
| Temperley–Lieb $TL_n(\delta)$ | Jones 대각합 | Jones 다항식 |
| Hecke 대수 $H_n(q)$ | Ocneanu 대각합 | HOMFLY 다항식 |
| BMW(Birman–Murakami–Wenzl) 대수 | Markov 대각합 | Kauffman 다항식 |

네 대각합은 모두 양자군의 표현에서 다시 얻어진다.

## 물리와 계산

[애니온](anyons.md)의 세계선이 시공간에서 땋임을 이루므로 위상적 양자계산의 게이트가 $B_n$ 의 표현으로 주어진다. 계산 결과가 땋임의 위상에만 의존하므로 국소 잡음에 강하고, 표현의 상 $\rho(B_n)$ 이 유니터리군에서 조밀한지가 계산 보편성을 결정한다.

## 곡면과 사상류군

$B_n$ 이 구멍 뚫린 원판의 사상류군이므로 [곡면의 분류](classification-of-surfaces.md)와 이어진다. 땋임의 Nielsen–Thurston 분류(Nielsen–Thurston classification)의 세 유형(주기적, 가약, 유사 Anosov)은 닫힌 땋임과 그 축을 합친 링크의 보완공간의 기하 구조와 대응한다. 유사 Anosov 땋임의 팽창률은 그 보완공간의 쌍곡 부피와 부등식으로 연결된다.

[^1]: J. Birman, *Braids, Links, and Mapping Class Groups*, Ann. of Math. Studies 82 (1974) 가 표준 참고서다. Markov 정리의 현대적 증명은 P. Traczyk 과 N. Weinberg 의 짧은 논법이 널리 쓰인다. 선형성은 S. Bigelow, *Braid groups are linear*, J. Amer. Math. Soc. **14** (2001) 와 D. Krammer, *Braid groups are linear*, Ann. of Math. **155** (2002).
[^2]: S. Bigelow, *The Burau representation is not faithful for n = 5*, Geometry & Topology **3** (1999), 397–404. 이 논문이 다섯 가닥의 경우를 해결하면서 네 가닥은 미해결로 남는다고 적었다.

# 연관 문서

## 선수지식

- [군의 표시](group-presentations.md)
- [매듭 불변량](knot-invariants.md)

## 더 알아보기

- [Garside 정규형](garside-normal-form.md)

#topology #group_theory #algebra
