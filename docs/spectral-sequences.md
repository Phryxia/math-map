# 스펙트럼 수열

# 개요

**스펙트럼 수열(spectral sequence)** 은 [코호몰로지](cohomology.md)를 여러 단계에 걸쳐 차례로 고쳐 가며 계산하는 방법이다. 원을 올로, 구면 $S^2$ 를 밑공간으로 갖는 $S^3$ 의 코호몰로지를 곱 $S^1\times S^2$ 처럼 계산하면 차수 $0,1,2,3$ 에서 $\mathbb Z$ 가 하나씩 나오지만, 실제로는 차수 $0$ 과 $3$ 에만 있다. 스펙트럼 수열은 곱처럼 계산한 표에서 시작해, 한 자리에서 다른 자리로 가는 준동형으로 서로 지워지는 항을 단계마다 없애 실제 답에 이른다.

# 직관

[올화](fibrations.md) $S^1\to S^3\to S^2$ 에서 $S^3$ 의 코호몰로지를 올과 밑공간의 것으로 구하려 한다. [호모토피군](homotopy-groups.md)에는 올, 전체공간, 밑공간을 잇는 긴 [완전열](exact-sequences.md)이 있지만 코호몰로지에는 그런 열이 없다. 전체공간이 곱 $S^1\times S^2$ 라면 Künneth 공식(Künneth formula)이 차수 $0,1,2,3$ 에서 각각 $\mathbb Z$ 를 주지만, $S^3$ 의 코호몰로지는 차수 $0$ 과 $3$ 에서만 $\mathbb Z$ 다. 곱이 아닌 이 Hopf 올화(Hopf fibration)에서는 네 조각 가운데 둘이 사라져야 한다.

조각을 차수 하나로 뭉치지 말고 가로를 밑공간의 차수 $p$, 세로를 올의 차수 $q$ 로 둔 격자에 놓는다. $\mathbb Z$ 가 놓인 자리는 $(0,0),(2,0),(0,1),(2,1)$ 이고 총차수 $p+q$ 는 각각 $0,2,1,3$ 이다.

남아야 하는 것은 총차수 $0$ 과 $3$ 이므로 $(2,0)$ 과 $(0,1)$ 이 서로를 지워야 한다. 한 자리에서 다른 자리로 가는 준동형을 두고 그 핵과 여핵만 남긴다고 하면, $(0,1)$ 에서 $(2,0)$ 으로 가는 준동형이 동형일 때 두 자리가 함께 사라지고 $(0,0)$ 과 $(2,1)$ 만 남는다. 총차수가 $0$ 과 $3$ 이므로 $S^3$ 의 코호몰로지와 맞는다.

이 준동형은 가로로 $2$ 칸, 세로로 $-1$ 칸 옮긴다. 옮기는 폭이 다른 준동형을 폭마다 하나씩 두고 차례로 적용하는 것이 스펙트럼 수열이고, 폭 $2$ 짜리를 적용한 단계가 위 계산이다.

# 정의

## 스펙트럼 수열

**스펙트럼 수열** 은 아벨군의 이중 등급 족 $E_r^{p,q}$ ($r\ge r_0$)과 준동형

$$
d_r:E_r^{p,q}\to E_r^{p+r,q-r+1},\qquad d_r\circ d_r=0
$$

의 열로, 각 $r$ 과 각 자리 $(p,q)$ 에서 다음 페이지가 이번 페이지의 코호몰로지인 것이다.

$$
E_{r+1}^{p,q}\cong\ker\bigl(d_r:E_r^{p,q}\to E_r^{p+r,q-r+1}\bigr)\big/\mathrm{im}\bigl(d_r:E_r^{p-r,q+r-1}\to E_r^{p,q}\bigr)
$$

$r$ 을 **페이지(page)** 라 하고 $d_r$ 을 **미분(differential)** 이라 한다.

직관 절의 격자가 $E_2$ 페이지다. $E_2^{0,0}=E_2^{2,0}=E_2^{0,1}=E_2^{2,1}=\mathbb Z$ 이고 나머지는 $0$ 이다. $d_2$ 는 $(p,q)$ 를 $(p+2,q-1)$ 로 보내므로 $0$ 이 아닐 수 있는 것은 $d_2:E_2^{0,1}\to E_2^{2,0}$ 하나다. 이것이 동형이면 $E_3$ 에는 $(0,0)$ 과 $(2,1)$ 만 남는다.

## 수렴

각 자리 $(p,q)$ 에서 $r$ 이 충분히 크면 $d_r$ 이 그 자리로 들어오지도 나가지도 않으므로 $E_r^{p,q}$ 가 더 바뀌지 않는다. 그 값을 $E_\infty^{p,q}$ 라 한다. Hopf 올화에서는 $r\ge 3$ 이면 모든 $d_r$ 이 $0$ 이므로 $E_\infty=E_3$ 이다.

등급 아벨군 $H^n$ 에 **여과(filtration)** $H^n=F^0\supseteq F^1\supseteq\cdots\supseteq F^{n+1}=0$ 이 있고

$$
E_\infty^{p,q}\cong F^p H^{p+q}/F^{p+1}H^{p+q}
$$

이면 이 스펙트럼 수열이 $H^\ast$ 로 **수렴한다(converges)** 고 하고 $E_{r_0}^{p,q}\Rightarrow H^{p+q}$ 로 쓴다. 수렴은 $H^n$ 을 직접 주지 않고 여과의 몫만 준다. 몫에서 $H^n$ 을 되찾는 문제를 **확대 문제(extension problem)** 라 한다. 총차수 $n$ 의 $E_\infty$ 가 $\mathbb Z/2$ 두 개이면 $H^n$ 은 $\mathbb Z/4$ 일 수도 $\mathbb Z/2\oplus\mathbb Z/2$ 일 수도 있다. Hopf 올화에서는 총차수마다 $E_\infty$ 가 많아야 하나이므로 $H^0=H^3=\mathbb Z$ 가 바로 나온다.

# 성질

## 여과된 복합체의 스펙트럼 수열

[사슬 복합체](chain-complexes.md) $C^\ast$ 에 감소 여과 $F^p C^\ast$ 가 주어지면 $E_1^{p,q}=H^{p+q}(F^pC/F^{p+1}C)$ 에서 시작하는 스펙트럼 수열이 있고, 여과가 각 차수에서 유한하면 $H^\ast(C)$ 로 수렴한다.

$d_r$ 은 $F^p$ 의 원소 가운데 경계가 $F^{p+r}$ 에 드는 것을 골라, 그 경계의 류를 대응시켜 정의한다. 페이지 $r$ 은 여과 한 칸 안에서 닫힌 원소가 $r$ 칸 아래에서 닫히는지를 본다.

## Serre 스펙트럼 수열

$F\to E\to B$ 가 Serre 올화(Serre fibration)이고 $B$ 가 단순연결이면

$$
E_2^{p,q}=H^p(B;H^q(F))\Rightarrow H^{p+q}(E)
$$

인 스펙트럼 수열이 있다. 이것을 Serre 스펙트럼 수열(Serre spectral sequence)이라 한다.

증명의 요지는 $B$ 의 [CW 복합체](cw-complexes.md)(closure-finite weak topology) 구조의 골격으로 $E$ 를 여과하는 것이다. $p$ 골격의 역상까지를 $F^p$ 로 잡으면 여과 조각의 코호몰로지가 $p$ 세포마다 올의 코호몰로지를 하나씩 주고, 그것을 모은 것이 $H^p(B;H^q(F))$ 다. $B$ 가 단순연결이 아니면 $\pi_1(B)$ 가 $H^q(F)$ 에 작용해 국소계수(local coefficients)가 된다.

## 모서리 준동형과 다섯 항 완전열

$p,q\ge 0$ 에서만 $0$ 이 아닌 스펙트럼 수열에서 $E_r^{p,0}$ 으로부터 나가는 $d_r$ 은 $q\lt 0$ 인 자리로 가므로 $0$ 이고, $E_r^{0,q}$ 로 들어오는 $d_r$ 은 $p\lt 0$ 인 자리에서 오므로 $0$ 이다. 따라서 $E_\infty^{p,0}$ 은 $E_2^{p,0}$ 의 몫이면서 $H^p$ 의 부분군 $F^pH^p$ 이고, $E_\infty^{0,q}$ 는 $E_2^{0,q}$ 의 부분군이면서 $H^q$ 의 몫 $H^q/F^1H^q$ 이다. 이 두 사상 $E_2^{p,0}\to H^p$ 와 $H^q\to E_2^{0,q}$ 를 **모서리 준동형(edge homomorphism)** 이라 한다. 낮은 차수만 떼면 다음이 완전하다.

$$
0\to E_2^{1,0}\to H^1\to E_2^{0,1}\xrightarrow{d_2}E_2^{2,0}\to H^2
$$

## 두 줄 스펙트럼 수열

올이 구면 $S^k$ 이고 올다발이 방향 가능하면 $E_2$ 에서 $0$ 이 아닌 줄은 $q=0$ 과 $q=k$ 둘뿐이다. 그러면 $0$ 이 아닐 수 있는 미분은 $d_{k+1}$ 하나이고, 스펙트럼 수열이 긴 완전열 하나로 바뀐다. 이것이 Gysin 열(Gysin sequence)이다. 밑공간이 구면이면 $0$ 이 아닌 세로줄이 둘뿐이어서 Wang 열(Wang sequence)이 나온다.

# 활용

- Hopf 올화. $S^3$ 의 코호몰로지가 차수 $0$ 과 $3$ 에만 있으므로 직관 절의 $d_2:E_2^{0,1}\to E_2^{2,0}$ 은 동형이어야 한다. 거꾸로 $d_2$ 가 동형임을 알면 같은 계산이 $H^\ast(S^3)$ 를 준다.
- 고리공간. 경로 올화 $\Omega B\to PB\to B$ 에서 $PB$ 가 수축가능하므로 $E_\infty$ 에는 $(0,0)$ 자리만 남아야 한다. 그 조건이 $H^\ast(\Omega B)$ 를 $H^\ast(B)$ 에서 결정하고, $\Omega S^{n+1}$ 의 코호몰로지가 이렇게 나온다.
- [Eilenberg–MacLane 공간](eilenberg-maclane-spaces.md)의 코호몰로지. 올화 $K(G,n-1)\to PK(G,n)\to K(G,n)$ 에 같은 계산을 반복해 차수를 올려 가며 구하고, 그 결과가 [Steenrod 연산](steenrod-operations.md) 같은 코호몰로지 연산의 목록이다.
- [Postnikov 탑](postnikov-tower.md). 탑의 각 단계가 올화이므로 단계마다 스펙트럼 수열을 써서 구면의 호모토피군을 차수 순으로 계산한다.
- 유도 함자의 합성. 두 [함자](functors.md)를 합성한 것의 [유도 함자](derived-functors.md)를 각각의 유도 함자로 계산하는 Grothendieck 스펙트럼 수열(Grothendieck spectral sequence)은 [층 코호몰로지](sheaf-cohomology.md)의 Leray 스펙트럼 수열(Leray spectral sequence)을 특수 사례로 갖는다.

# 연관 문서

## 선수지식

- [코호몰로지](cohomology.md)
- [올화](fibrations.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #topology #algebra
