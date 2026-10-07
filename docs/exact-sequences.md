# 완전열

# 개요

완전열은 준동형으로 이어진 가군의 사슬에서 각 자리의 상이 다음 자리의 핵과 같은 것이다. 짧은 완전열 하나가 부분가군과 몫가군의 관계를 적고, 그 관계에서 크기와 차원의 덧셈 공식이 나온다.

사슬이 완전하지 않으면 각 자리에 $\ker/\mathrm{im}$ 이 남고, 그 몫이 호몰로지다. 함자를 통과시킨 뒤에도 완전성이 유지되는지를 묻는 것이 유도 함자의 출발이고, 완전성이 깨진 만큼이 Ext 와 Tor 로 측정된다.

# 직관

선형사상 $f:V\to W$ 에서 $\dim V=\dim\ker f+\dim\mathrm{im}\thinspace f$ 다. 사상 하나에서는 이 등식으로 차원을 센다. 사상이 둘 이상 이어질 때도 같은 셈을 하려 한다.

사상 $f:U\to V$ 와 $g:V\to W$ 를 이어 $g\circ f=0$ 을 요구하면 $\mathrm{im}\thinspace f\subset\ker g$ 다. $U=\mathbb R$, $V=\mathbb R^2$, $W=\mathbb R$ 에 $f(t)=(t,0)$ 과 $g(x,y)=y$ 를 두면 $\mathrm{im}\thinspace f=\lbrace(t,0):t\in\mathbb R\rbrace$ 이고 $\ker g$ 도 같은 집합이다. $f$ 가 단사이고 $g$ 가 전사이므로 $\dim V=\dim U+\dim W$ 로 $2=1+1$ 이 성립한다.

같은 $f$ 에 $g(x,y)=0$ 을 두면 셈이 어긋난다. $\ker g=\mathbb R^2$ 이고 $\mathrm{im}\thinspace f$ 는 1 차원이므로 둘이 같지 않고, $\dim U+\dim W=1+1$ 은 $\dim V=2$ 를 맞히지만 $g$ 가 전사가 아니어서 우연이다. 어긋난 양은 몫 $\ker g/\mathrm{im}\thinspace f$ 이고 이 예에서 1 차원이다.

각 자리에서 상과 핵이 같기를 요구한 사슬이 완전열이고, 그때 차원의 교대합이 $0$ 이 된다. 요구하지 않으면 자리마다 $\ker/\mathrm{im}$ 이 남고, 그 몫들이 [호몰로지](homology.md)다.

# 정의

환 $R$ 위의 가군과 $R$ 준동형의 사슬

$$\cdots\to M\_{n+1}\xrightarrow{d\_{n+1}}M_n\xrightarrow{d_n}M\_{n-1}\to\cdots$$

이 자리 $n$ 에서 **완전**하다는 것은 $\mathrm{im}\thinspace d\_{n+1}=\ker d_n$ 이라는 뜻이다. 모든 자리에서 완전하면 사슬을 **완전열**이라 한다.

## 짧은 완전열

$$0\to A\xrightarrow{f}B\xrightarrow{g}C\to 0$$

이 완전한 것은 $f$ 가 단사, $g$ 가 전사, $\mathrm{im}\thinspace f=\ker g$ 인 것과 같다. 그러면 $f$ 가 $A$ 를 $B$ 의 부분가군과 동형으로 맺고 $g$ 가 $C$ 를 몫 $B/f(A)$ 와 동형으로 맺는다.

양 끝의 $0$ 이 단사성과 전사성을 적는 장치다. 왼쪽 $0\to A$ 의 완전성이 $\ker f=0$ 이고, 오른쪽 $C\to 0$ 의 완전성이 $\mathrm{im}\thinspace g=C$ 다.

## 분할

짧은 완전열에 $s:C\to B$ 가 있어 $g\circ s=\mathrm{id}\_C$ 이면 그 열이 **분할된다**고 한다.

# 성질

## 덧셈 공식

짧은 완전열 $0\to A\to B\to C\to 0$ 에서, 유한차원 벡터공간이면 $\dim B=\dim A+\dim C$ 이고 유한 아벨군이면 $\vert B\vert=\vert A\vert\cdot\vert C\vert$ 다. 몫가군의 성질에서 바로 나온다.

유한 길이의 완전열 $0\to V_1\to\cdots\to V_n\to 0$ 에서는 차원의 교대합이 $0$ 이다.

$$\sum\_{i=1}^{n}(-1)^i\dim V_i=0$$

증명은 길이에 대한 귀납이다. $\mathrm{im}\thinspace d_2=\ker d_1$ 로 열을 짧은 완전열과 길이가 하나 짧은 완전열로 쪼갠다.

## 분할 판정

가군의 짧은 완전열에서 다음이 동치다.

- 열이 분할된다.
- $r:B\to A$ 가 있어 $r\circ f=\mathrm{id}\_A$ 다.
- $B\cong A\oplus C$ 이고 그 동형이 $f$ 와 $g$ 와 양립한다.

벡터공간의 짧은 완전열은 모두 분할된다. 가군에서는 그렇지 않다. $0\to\mathbb Z\xrightarrow{2}\mathbb Z\to\mathbb Z/2\to 0$ 은 분할되지 않는다. $\mathbb Z$ 에는 위수 $2$ 의 원소가 없으므로 $\mathbb Z\cong\mathbb Z\oplus\mathbb Z/2$ 가 불가능하다.

## 뱀 보조정리

사슬 복합체의 짧은 완전열 $0\to A\_{\bullet}\to B\_{\bullet}\to C\_{\bullet}\to 0$ 이 주어지면, 연결 준동형 $\partial:H_n(C\_{\bullet})\to H\_{n-1}(A\_{\bullet})$ 가 있어

$$\cdots\to H_n(A\_{\bullet})\to H_n(B\_{\bullet})\to H_n(C\_{\bullet})\xrightarrow{\partial}H\_{n-1}(A\_{\bullet})\to\cdots$$

가 완전열이다.[^1] 연결 준동형은 $C_n$ 의 사이클을 $B_n$ 으로 올리고 미분한 뒤 $A\_{n-1}$ 로 내리는 것이고, 올리는 방법에 의존하지 않는다.

## 함자의 완전성

함자 $F$ 가 모든 짧은 완전열을 짧은 완전열로 보내면 **완전**하다고 한다. $0\to F(A)\to F(B)\to F(C)$ 까지만 완전하면 왼쪽 완전, $F(A)\to F(B)\to F(C)\to 0$ 까지만 완전하면 오른쪽 완전이다.

$\mathrm{Hom}(X,-)$ 는 왼쪽 완전이고 $-\otimes N$ 은 오른쪽 완전이다. 양쪽이 되지 않는 쪽의 결손을 재는 것이 [유도 함자](derived-functors.md)이고, 그 값이 Ext 와 Tor 다.

[^1]: Charles A. Weibel, *An Introduction to Homological Algebra*, Cambridge University Press, 1994, 1 장. 완전열, 뱀 보조정리, 함자의 완전성이 여기 있다.

# 활용

- **위상불변량.** 공간의 쌍이나 덮개가 사슬 복합체의 짧은 완전열을 주고, 뱀 보조정리가 그것을 호몰로지의 긴 완전열로 옮긴다. [Mayer–Vietoris 완전열](mayer-vietoris.md)이 두 열린집합의 호몰로지에서 합집합의 호몰로지를 계산하는 꼴이다.
- **군의 확대.** 군의 짧은 완전열 $1\to N\to G\to Q\to 1$ 이 $G$ 를 $N$ 과 $Q$ 의 확대로 적는다. 분할되는 경우가 반직적이고, 분할되지 않는 확대의 분류가 [군 코호몰로지](group-cohomology.md)의 2 차 코호몰로지다.
- **타원곡선의 계수.** 하강법은 유리점의 군을 완전열에 넣어 Selmer 군과 Shafarevich–Tate 군 사이의 관계로 적는다. 완전열의 한 자리가 계산 가능하면 다른 자리의 크기가 제한된다.
- **가군의 분해.** 사영가군으로 짜인 완전열로 가군을 덮는 것이 사영분해이고, 유도 함자의 계산이 그 분해 위에서 이뤄진다.

# 연관 문서

## 선수지식

- [가군](modules.md)

## 더 알아보기

- [Mayer–Vietoris 완전열](mayer-vietoris.md)

#algebra #ring_theory #algebraic_topology
