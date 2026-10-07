# Tate 코호몰로지

# 개요

Tate 코호몰로지는 유한군 $G$ 와 $G$ 가군 $A$ 에 대해 모든 정수 차수에서 정의되는 가환군 $\hat H^n(G,A)$ 다. 양의 차수에서는 [군 코호몰로지](group-cohomology.md)와 같고, $n\le -2$ 에서는 군 호몰로지를 차수를 뒤집어 쓰고, $n=0$ 과 $n=-1$ 에서는 노름 사상의 여핵과 핵을 쓴다.

짧은 완전열이 끊기지 않는 양방향 긴 완전열을 주고, 유도 가군에서 모든 차수가 소멸하므로 차수 이동으로 계산이 옮겨진다. 유한 순환군에서는 주기가 $2$ 이고, 그때 $\hat H^0$ 과 $\hat H^1$ 의 위수 비가 **Herbrand 몫**이다. [유체론](class-field-theory.md)의 노름 지표 계산이 이 몫의 곱셈성을 쓴다.

# 직관

유한군 $G$ 와 짧은 완전열 $0\to A\to B\to C\to 0$ 에서 코호몰로지의 긴 완전열은 $H^0(G,A)=A^G$ 에서 왼쪽으로 끊긴다. 호몰로지의 긴 완전열은 $H_0(G,A)=A/I_GA$ 에서 오른쪽으로 끊긴다. 두 열을 하나로 이으려면 $A/I_GA$ 에서 $A^G$ 로 가는 사상이 있어야 한다.

$G$ 가 유한하므로 $N=\sum_{g\in G}g$ 를 가군에 작용시킬 수 있다. $h\in G$ 에 대해 $hN=N$ 이므로 $Na$ 는 $G$ 불변이고, $N(g-1)a=0$ 이므로 $N$ 은 $I_GA$ 를 죽인다. 따라서 $N$ 은 몫에서 사상 $N^\ast:A/I_GA\to A^G$ 를 유도한다.

$N^\ast$ 는 동형이 아니고 핵과 여핵이 남는다. 그 둘을 $-1$ 차와 $0$ 차의 값으로 쓰면 호몰로지 쪽 열과 코호몰로지 쪽 열이 $N^\ast$ 를 통해 이어져 모든 정수 차수를 지나는 완전열 하나가 된다.

위수 $m$ 인 순환군과 자명한 작용의 $A=\mathbb Z$ 로 확인한다. $I_G\mathbb Z=0$ 이므로 $N^\ast$ 는 $\mathbb Z\to\mathbb Z$ 의 $m$ 배 사상이고, 핵은 $0$, 여핵은 $\mathbb Z/m\mathbb Z$ 다. 즉 $-1$ 차의 값이 $0$, $0$ 차의 값이 $\mathbb Z/m\mathbb Z$ 다.

# 정의

## 노름 사상과 Tate 코호몰로지

유한군 $G$ 와 $G$ 가군 $A$ 에 대해 $N=\sum_{g\in G}g\in\mathbb Z G$ 라 하고, $I_G$ 를 $\lbrace g-1:g\in G\rbrace$ 가 생성하는 $\mathbb Z G$ 의 양쪽 이데알이라 한다. **노름 사상**은 $N^\ast:A/I_GA\to A^G$, $a+I_GA\mapsto Na$ 다. **Tate 코호몰로지**는 다음이다.

$$\hat H^n(G,A)=\begin{cases}H^n(G,A) & n\ge 1\cr \mathrm{coker}\thinspace N^\ast & n=0\cr \ker N^\ast & n=-1\cr H_{-n-1}(G,A) & n\le -2\end{cases}$$

$n\ge 1$ 과 $n\le -2$ 의 값은 원래의 코호몰로지와 호몰로지이고, 두 중간 차수만 새로 정의된다.

## 완전 분해

$\mathbb Z G$ 자유 가군의 완전열 $\cdots\to P_1\to P_0\to P_{-1}\to P_{-2}\to\cdots$ 가 $P_0\to P_{-1}$ 에서 $\mathbb Z$ 를 거쳐 끊기면, 곧 $\mathbb Z$ 의 사영 분해와 그 쌍대를 이어 붙인 것이면 **완전 분해**라 한다. $\mathrm{Hom}\_{\mathbb Z G}(P\_\bullet,A)$ 의 $n$ 번째 코호몰로지가 모든 $n\in\mathbb Z$ 에서 $\hat H^n(G,A)$ 다[^1]. 위의 경우 나눔이 하나의 복합체로 합쳐진다.

# 성질

## 양방향 긴 완전열

짧은 완전열 $0\to A\to B\to C\to 0$ 은 모든 정수 차수를 지나는 긴 완전열을 준다.

$$\cdots\to\hat H^n(G,A)\to\hat H^n(G,B)\to\hat H^n(G,C)\to\hat H^{n+1}(G,A)\to\cdots$$

완전 분해가 자유 가군의 복합체이므로 짧은 완전열에 $\mathrm{Hom}\_{\mathbb Z G}(P\_\bullet,-)$ 을 적용한 것이 다시 짧은 완전열이고, 복합체의 긴 완전열이 양쪽으로 끝없이 이어진다.

## 유도 가군에서의 소멸

가환군 $M$ 에 대해 $A=\mathbb Z G\otimes_{\mathbb Z}M$ 이면 모든 $n\in\mathbb Z$ 에서 $\hat H^n(G,A)=0$ 이다.

이 소멸로 차수를 옮긴다. 임의의 $A$ 를 유도 가군에 넣는 짧은 완전열 $0\to A\to \mathbb Z G\otimes A\to Q\to 0$ 을 잡으면 긴 완전열에서 $\hat H^n(G,Q)\cong\hat H^{n+1}(G,A)$ 이므로, 한 차수의 계산이 다른 차수의 계산으로 바뀐다. 양의 차수에서만 가능했던 차수 이동이 모든 차수에서 된다.

## 순환군의 주기성

$G$ 가 위수 $m$ 인 순환군이고 $t$ 가 생성원이면 모든 $n\in\mathbb Z$ 에서 $\hat H^{n+2}(G,A)\cong\hat H^n(G,A)$ 이고 값은 두 가지다.

$$\hat H^{2k}(G,A)=A^G/NA,\qquad \hat H^{2k+1}(G,A)=\ker N/(t-1)A$$

군 코호몰로지의 주기성은 $k\ge 1$ 에서만 성립하고 $H^0=A^G$ 가 그 꼴에서 벗어난다. Tate 쪽에서 $0$ 차를 여핵 $A^G/NA$ 로 바꾸면 예외가 사라진다.

## Herbrand 몫

$\hat H^0(G,A)$ 와 $\hat H^1(G,A)$ 가 모두 유한하면 **Herbrand 몫**을 다음으로 정의한다.

$$h(A)=\frac{\lvert\hat H^0(G,A)\rvert}{\lvert\hat H^1(G,A)\rvert}$$

$A$ 가 유한군이면 $h(A)=1$ 이다. $N^\ast$ 의 핵과 여핵의 위수 비가 정의역과 공역의 위수 비와 같고, $\lvert A/I_GA\rvert=\lvert A^G\rvert$ 가 유한군에서 성립한다.

짧은 완전열 $0\to A\to B\to C\to 0$ 에서 셋 가운데 둘의 몫이 정의되면 나머지도 정의되고 $h(B)=h(A)h(C)$ 다.

증명의 요지. 주기성에서 긴 완전열이 여섯 항의 순환열이 된다. 유한 가환군의 완전열에서 위수의 교대곱이 $1$ 이므로, 여섯 항의 위수를 교대로 곱한 값이 $1$ 이고 이것이 곱셈성의 식이다.

# 활용

- **노름 지표.** 순환 확대 $L/K$ 에서 $\hat H^0(\mathrm{Gal}(L/K),L^\times)=K^\times/N L^\times$ 이므로 $0$ 차의 위수가 노름 지표다. Herbrand 몫의 곱셈성으로 단원군과 아이디얼류군의 열을 따라 이 위수를 계산하는 것이 [유체론](class-field-theory.md)의 제1부등식과 제2부등식의 계산이다.
- **Hilbert 정리 90 의 짝.** 순환 확대에서 $\hat H^1(\mathrm{Gal}(L/K),L^\times)=0$ 이 [Hilbert 정리 90](hilbert-theorem-90.md)이고, 주기성에서 모든 홀수 차수가 소멸한다. 이때 Herbrand 몫이 $0$ 차의 위수 자체다.
- **국소체의 불변량.** 국소체의 Brauer 군이 $\hat H^2(\mathrm{Gal},L^\times)$ 으로 계산되고, 그 값이 순환 확대의 차수로 주어지는 것이 [국소 유체론](local-class-field-theory.md)의 불변량 사상이다.
- **코호몰로지 자명성 판정.** 한 소수 $p$ 마다 두 이웃 차수에서 $\hat H^n$ 이 소멸하면 모든 차수에서 소멸한다. 차수 이동으로 판정이 두 차수의 계산으로 줄어든다.

[^1]: K. S. Brown, *Cohomology of Groups*, Graduate Texts in Mathematics 87, Springer, 1982. 6장이 완전 분해와 Tate 코호몰로지, 유도 가군의 소멸을 다룬다.

# 연관 문서

## 선수지식

- [군 코호몰로지](group-cohomology.md)

## 더 알아보기

아직 연결한 문서가 없다.

#group_theory #number_theory #algebra #algebraic_topology
