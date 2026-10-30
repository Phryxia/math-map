# 군 코호몰로지

# 개요

**군 코호몰로지(group cohomology)** 는 군 $G$ 와 $G$ 가 작용하는 가환군 $A$ 에 가환군 $H^n(G,A)$ 를 대응시키는 불변량이다. 위수 $100$ 인 순환군을 가환군 $A$ 로 확대하는 방법을 코사이클 조건으로 직접 세면 미지수 만 개와 조건 백만 개를 다뤄야 한다. 군 코호몰로지는 이 확대들을 차수 $2$ 의 군 $H^2(G,A)$ 로 세고, 순환군에서는 주기적인 분해 하나로 이 군을 몇 줄의 계산으로 얻는다.

# 직관

위수 $m$ 인 순환군 $Q$ 를 가환군 $A$ 로 확대하는 방법을 센다. [군 확대](group-extensions.md)의 코사이클 조건을 그대로 쓰면 함수 $f:Q\times Q\to A$ 를 찾는 문제이고 미지수가 $m^2$ 개, 조건이 $m^3$ 개라 $m=100$ 이면 만 개의 미지수를 다룬다. $Q$ 는 생성원 $t$ 하나와 관계 $t^m=1$ 로 정해지므로 곱셈표를 전부 쓸 필요가 없다. $t-1$ 을 곱하는 사상과 $N=1+t+\cdots+t^{m-1}$ 을 곱하는 사상을 번갈아 놓은 다음 줄이 $Q$ 의 군환 위에서 그 일을 한다.

$$\cdots\xrightarrow{N}\mathbb Z Q\xrightarrow{t-1}\mathbb Z Q\xrightarrow{N}\mathbb Z Q\xrightarrow{t-1}\mathbb Z Q\xrightarrow{\varepsilon}\mathbb Z\to 0$$

각 항을 $A$ 로 보내는 $Q$ 동변 준동형은 $1$ 의 상 하나로 정해지므로 $\mathbb Z Q$ 가 있던 자리마다 $A$ 가 놓이고, 사상은 방향만 뒤집혀 같은 두 개가 번갈아 나온다.

$$A\xrightarrow{t-1}A\xrightarrow{N}A\xrightarrow{t-1}A\to\cdots$$

$A=\mathbb Z$ 이고 작용이 자명하면 $t-1$ 은 $0$ 이고 $N$ 은 $m$ 배다. 그러면 차수 $0$ 에서 $\mathbb Z$, 홀수 차수에서 $\ker(m)=0$, $2$ 이상의 짝수 차수에서 $\mathbb Z/m$ 이 나온다. 만 개의 미지수 없이 차수 $2$ 의 답이 $\mathbb Z/m$ 으로 나왔고, 이것이 확대의 동치류의 개수다.

# 정의

$G$ 를 군, $\mathbb Z G$ 를 그 군환, $A$ 를 [가군](modules.md)으로 본 $G$ 가군이라 하자. $\mathbb Z$ 에 자명한 작용을 줄 때 **군 코호몰로지** 는 다음 가환군이다.

$$H^n(G,A)=\mathrm{Ext}^n\_{\mathbb Z G}(\mathbb Z,A)$$

곧 $\mathbb Z$ 의 사영 분해 $P\_\bullet\to\mathbb Z$ 를 하나 잡고 복합체 $\mathrm{Hom}\_{\mathbb Z G}(P\_\bullet,A)$ 의 $n$ 번째 코호몰로지를 취한 것이다[^1].

직관 절의 줄이 위수 $m$ 인 순환군 $Q$ 에 대한 $\mathbb Z$ 의 사영 분해다. $A=\mathbb Z$ 에 자명한 작용을 주면 Hom 을 취한 복합체가 $\mathbb Z\xrightarrow{0}\mathbb Z\xrightarrow{m}\mathbb Z\xrightarrow{0}\mathbb Z\to\cdots$ 이므로 $H^0(Q,\mathbb Z)=\mathbb Z$ 이고, 홀수 차수에서 $0$, $2$ 이상의 짝수 차수에서 $\mathbb Z/m$ 이다.

## 막대 분해

**막대 분해(bar resolution)** 는 $P\_n$ 을 $G^n$ 을 기저로 하는 자유 $\mathbb Z G$ 가군으로 둔 $\mathbb Z$ 의 사영 분해다. 이 분해에서 복합체는 $C^n(G,A)=\lbrace f:G^n\to A\rbrace$ 와 군 확대에서 쓰는 코경계 공식이다.

$n=1$ 에서 코경계는 $(\delta f)(g,h)=g\cdot f(h)-f(gh)+f(g)$ 이다. 작용이 자명하면 $\delta f=0$ 은 $f(gh)=f(g)+f(h)$ 이고, $0$ 차 코사슬 $a\in A$ 의 코경계는 $g\cdot a-a=0$ 이므로 $H^1(G,A)=\mathrm{Hom}(G,A)$ 다. $G=Q$, $A=\mathbb Z$ 이면 유한 위수 원소를 $\mathbb Z$ 로 보내는 준동형은 $0$ 뿐이므로 $H^1(Q,\mathbb Z)=0$ 이고, 직관 절의 분해로 구한 값과 같다.

# 성질

## 분해의 선택과 함자성

[유도 함자](derived-functors.md)의 일반론으로 $H^n(G,A)$ 는 사영 분해의 선택에 무관하다. 막대 분해가 모든 군에 있으므로 모든 군에서 정의되고, 특정 군에서는 더 짧은 분해로 계산한다.

$H^n(G,-)$ 은 $G$ 가군에서 가환군으로 가는 함자이고, 짧은 완전열 $0\to A\to B\to C\to 0$ 은 긴 완전열을 준다.

$$\cdots\to H^n(G,A)\to H^n(G,B)\to H^n(G,C)\to H^{n+1}(G,A)\to\cdots$$

## 낮은 차수

$H^0(G,A)=A^G$ 는 불변원소의 군이고, $H^1(G,A)$ 는 꼬인 준동형(crossed homomorphism)을 주 꼬인 준동형(principal crossed homomorphism)으로 나눈 것이며, $H^2(G,A)$ 는 $A$ 를 핵으로 하는 $G$ 의 확대의 동치류와 전단사다. 각 차수의 해석은 군 확대에 있다.

## Shapiro 보조정리

$H\le G$ 이고 $B$ 가 $H$ 가군이면 다음이 성립한다.

$$H^n(G,\mathrm{Hom}\_{\mathbb Z H}(\mathbb Z G,B))\cong H^n(H,B)$$

증명의 요지. $\mathbb Z G$ 가 $\mathbb Z H$ 위에서 자유이므로 $\mathbb Z$ 의 사영 $G$ 분해는 사영 $H$ 분해이기도 하다. [수반](adjunctions.md) 관계 $\mathrm{Hom}\_{\mathbb Z G}(P,\mathrm{Hom}\_{\mathbb Z H}(\mathbb Z G,B))\cong\mathrm{Hom}\_{\mathbb Z H}(P,B)$ 가 두 복합체를 같은 것으로 만든다.

## 유한군에서의 소멸

$G$ 가 위수 $m$ 인 유한군이면 $n\ge 1$ 에서 $m\cdot H^n(G,A)=0$ 이다.

증명의 요지. 부분군 $H\le G$ 의 지표가 유한하면 제한 $\mathrm{res}:H^n(G,A)\to H^n(H,A)$ 와 코르스트릭션(corestriction) $\mathrm{cor}$ 이 있고 $\mathrm{cor}\circ\mathrm{res}$ 가 $\lbrack G:H\rbrack$ 배다. $H$ 를 자명군으로 두면 $n\ge 1$ 에서 $H^n(1,A)=0$ 이므로 $\mathrm{res}$ 가 $0$ 이고, 따라서 $m$ 배가 $0$ 이다.

따라서 $A$ 가 유한생성이면 $n\ge 1$ 의 $H^n(G,A)$ 는 위수가 $\lvert G\rvert$ 를 나누는 유한군이다. $\lvert G\rvert$ 가 $A$ 에서 가역이면 $n\ge 1$ 의 코호몰로지가 모두 $0$ 이고, 이것이 표수가 군의 위수를 나누지 않을 때 표현이 완전가약인 이유다.

## 순환군의 주기성

$G$ 가 위수 $m$ 인 순환군이면 직관 절의 분해가 주기 $2$ 이므로 $k\ge 1$ 에서 $H^{k+2}(G,A)\cong H^k(G,A)$ 이고, 값은 다음으로 주어진다.

$$H^k(G,A)=\begin{cases}A^G & k=0\cr \ker N/(t-1)A & k\ \text{ 홀수}\cr A^G/NA & k\ \text{ 짝수},\ k\ge 2\end{cases}$$

여기서 $t$ 는 생성원이고 $N=1+t+\cdots+t^{m-1}$ 이다. 짝수 차수의 값 $A^G/NA$ 를 [Herbrand 몫](tate-cohomology.md)의 계산에 쓴다.

# 활용

- **확대와 중심확대.** $H^2(G,A)$ 가 확대를 분류하고, 계수를 $\mathbb C^\times$ 로 두면 [Schur 곱셈자](schur-multipliers.md)가 되어 사영표현이 보통 표현으로 올라가는지를 판정한다.
- **[Galois 코호몰로지](galois-cohomology.md).** $G=\mathrm{Gal}(L/K)$ 와 $A=L^\times$ 에서 $H^1(G,L^\times)=0$ 이 [Hilbert 정리 90](hilbert-theorem-90.md)이고 $H^2(G,L^\times)$ 가 [Brauer 군](brauer-groups.md)의 부분군이다. [유체론](class-field-theory.md)은 이 군의 계산을 상호법칙으로 옮긴다.
- **분류공간.** $EG$ 의 사슬 복합체가 $\mathbb Z G$ 위의 자유 분해이므로, 이산군 $G$ 에서 [분류공간](classifying-spaces.md) $BG$ 의 특이 [코호몰로지](cohomology.md)가 $H^n(G,M)$ 과 같다.
- **[Galois 표현](galois-representations.md)의 변형.** [변형환](deformation-rings.md)의 접공간이 $H^1(G,\mathrm{ad}\thinspace\bar\rho)$ 이고 올림의 장애류가 $H^2(G,\mathrm{ad}\thinspace\bar\rho)$ 에 산다.

[^1]: K. S. Brown, *Cohomology of Groups*, Graduate Texts in Mathematics 87, Springer, 1982. 3장이 분해와 Shapiro 보조정리, 6장이 유한군의 소멸과 주기성을 다룬다.

# 연관 문서

## 선수지식

- [군 확대](group-extensions.md)
- [코호몰로지](cohomology.md)
- [유도 함자](derived-functors.md)

## 더 알아보기

- [Tate 코호몰로지](tate-cohomology.md)
- [Hilbert 정리 90](hilbert-theorem-90.md)

#group_theory #algebra #algebraic_topology #number_theory
