# 적분가능계

# 개요

적분가능계는 보존량이 자유도만큼 있는 Hamilton 계다. [Hamilton 역학](hamiltonian-mechanics.md)의 정준방정식은 일반적으로 해를 식으로 적을 수 없지만, $2n$ 차원 위상공간에서 Poisson 괄호가 서로 소멸하는 보존량 $n$ 개를 찾으면 해가 적분 유한 번으로 나온다.

Arnold–Liouville 정리가 그 보존량들의 공통 준위집합을 $n$ 차원 원환면으로 보고, 그 근방에 흐름이 등속 운동으로 적히는 좌표를 준다.

# 직관

직선 위에서 움직이는 질량 $m$ 인 입자의 Hamilton 함수는 $H(q,p)=p^2/2m+V(q)$ 다. 에너지가 일정하므로 운동 내내 $p^2/2m+V(q)=E$ 이고, 여기서 $p=\pm\sqrt{2m(E-V(q))}$ 다. 이것을 $\dot q=p/m$ 에 넣으면

$$
t=\int\frac{dq}{\sqrt{2(E-V(q))/m}}
$$

이고, 적분 하나를 계산한 뒤 $t$ 와 $q$ 의 관계를 뒤집으면 운동이 정해진다.

자유도가 둘이면 상태가 $(q^1,q^2,p\_1,p\_2)$ 네 개이고 에너지가 일정하다는 식 하나로는 하나만 줄어든다. 남은 세 변수로는 위의 계산을 되풀이할 수 없다. 운동 내내 일정한 양 $F$ 를 하나 더 찾아 $F=c$ 를 더하면 상태가 2차원 집합 안에 갇힌다.

그 2차원 집합 위에 좌표를 잡으려면 $H$ 의 흐름과 $F$ 의 흐름을 각각 따라가 두 방향을 써야 한다. 이때 $H$ 의 흐름이 $F$ 를 바꾸지 않고 $F$ 의 흐름이 $H$ 를 바꾸지 않아야 두 흐름이 집합을 벗어나지 않는다. 두 요구가 모두 $\lbrace H,F\rbrace=0$ 이고, 이 조건에서 두 흐름은 순서를 바꿔도 같은 점에 닿는다. 그래서 집합의 한 점을 기준으로 두 흐름을 시간 $(t\_1,t\_2)$ 만큼 따라간 점을 $(t\_1,t\_2)$ 로 적으면 좌표가 된다.

집합이 유계이고 한 조각이면 두 방향으로 계속 흘러도 집합을 벗어나지 못하므로 어떤 $(t\_1,t\_2)\ne(0,0)$ 에서 처음 자리로 돌아온다. 돌아오는 시간들은 평면의 격자를 이루고, 집합은 평면을 그 격자로 접은 2차원 원환면이다. 원환면의 두 각 $\theta^1,\theta^2$ 로 적으면 흐름은 $\dot\theta^i=\mathrm{const}$ 인 등속 운동이고 적분을 계산할 것이 남지 않는다.

자유도 $n$ 에서 이런 보존량 $n$ 개를 가진 계를 적분가능계라 하고, 각과 짝을 이루는 보존량의 조합을 작용 변수라 한다.

# 정의

적분가능계는 보존량이 자유도만큼 있고 그 보존량들이 서로 Poisson 괄호로 소멸하는 Hamilton 계다. $2n$ 차원 [심플렉틱 다양체](symplectic-manifolds.md) $(M,\omega)$ 와 매끄러운 함수 $F\_1,\dots,F\_n\colon M\to\mathbb R$ 이 다음 둘을 만족하면 $(M,\omega,F)$ 를 **적분가능계**라 한다.

$$
\lbrace F\_i,F\_j\rbrace=0\qquad (1\le i,j\le n)
$$

그리고 $dF\_1,\dots,dF\_n$ 이 $M$ 의 조밀한 열린집합에서 선형독립이다. 첫 조건을 **대합성**(involutivity), 둘째를 독립성이라 한다. $F\_1=H$ 로 두면 나머지 $F\_2,\dots,F\_n$ 이 $H$ 의 흐름의 보존량이다.

$F=(F\_1,\dots,F\_n)\colon M\to\mathbb R^n$ 의 정칙값 $c$ 에 대한 올 $M\_c=F^{-1}(c)$ 의 콤팩트 연결 성분을 **Liouville 원환면**이라 한다.

$M\_c$ 의 근방 $U$ 에서 좌표 $(I\_1,\dots,I\_n,\theta^1,\dots,\theta^n)$ 이

$$
\omega=\sum\_{i=1}^n dI\_i\wedge d\theta^i,\qquad H=H(I\_1,\dots,I\_n)
$$

를 만족하고 각 $\theta^i$ 가 $\mathbb R/2\pi\mathbb Z$ 값이면 $(I,\theta)$ 를 **작용-각 좌표**라 한다. $I$ 가 작용 변수, $\theta$ 가 각 변수다.

# 성질

## Arnold–Liouville 정리

**정리.** $M\_c$ 가 콤팩트하고 연결되어 있으면 $M\_c$ 는 $\mathbb T^n=\mathbb R^n/\mathbb Z^n$ 과 미분동형이고, $M\_c$ 의 근방에 작용-각 좌표가 있다. 그 좌표에서 흐름은 $\dot I=0$, $\dot\theta^i=\partial H/\partial I\_i$ 다.[^1]

증명의 요지는 셋이다.

$X\_{F\_i}$ 는 $M\_c$ 에 접한다. $dF\_j(X\_{F\_i})=\lbrace F\_j,F\_i\rbrace=0$ 이므로 $F\_j$ 가 $X\_{F\_i}$ 의 흐름에 일정하기 때문이다. 또 $\lbrack X\_{F\_i},X\_{F\_j}\rbrack=X\_{\lbrace F\_i,F\_j\rbrace}=0$ 이므로 흐름들이 교환한다. 독립성으로 $X\_{F\_1},\dots,X\_{F\_n}$ 이 $n$ 차원 접공간을 채우므로 흐름들을 모은 $\mathbb R^n$ 의 작용이 $M\_c$ 에 추이적이고 국소적으로 자유롭다.

$\mathbb R^n$ 이 콤팩트 연결 다양체에 추이적으로 작용하면 한 점의 안정화군은 이산 부분군, 곧 완전계수 격자 $\Lambda\subset\mathbb R^n$ 이고 $M\_c\cong\mathbb R^n/\Lambda$ 다. 격자의 기저를 $\mathbb Z^n$ 의 기저로 옮기면 $\mathbb T^n$ 이 된다.

작용 변수는 올의 1차 호몰로지 기저 $\gamma\_1,\dots,\gamma\_n$ 과 $d\lambda=\omega$ 인 1형식 $\lambda$ 에 대해

$$
I\_i(c)=\frac1{2\pi}\oint\_{\gamma\_i}\lambda
$$

로 정한다. 올이 Lagrangian 이므로 $\lambda$ 의 적분은 $\gamma\_i$ 를 올 안에서 움직여도 변하지 않고, 따라서 $I\_i$ 가 $c$ 만의 함수다. 각 변수는 $I$ 를 좌표로 하는 생성함수의 편미분으로 얻는다. ∎

## 올의 Lagrangian 성질

**정리.** $M\_c$ 는 [Lagrangian 부분다양체](lagrangian-submanifolds.md)다. 곧 $\dim M\_c=n$ 이고 $\omega\vert\_{M\_c}=0$ 이다.

접공간이 $X\_{F\_i}$ 들로 생성되고 $\omega(X\_{F\_i},X\_{F\_j})=\lbrace F\_i,F\_j\rbrace=0$ 이므로 $\omega$ 가 접공간에서 소멸한다. 차원은 $F$ 가 정칙이므로 $2n-n=n$ 이다. ∎

## 준주기 운동

$\dot\theta=\nu(I)$ 의 해는 $\theta(t)=\theta\_0+\nu t$ 다. 진동수 $\nu\_1,\dots,\nu\_n$ 이 $k\cdot\nu=0$ 을 만족하는 정수벡터 $k\ne0$ 을 갖지 않으면 궤도가 원환면에서 조밀하고 [등분포](equidistribution.md)한다. 정수관계가 있으면 궤도가 더 낮은 차원의 원환면에 갇히고, 관계가 $n-1$ 개면 궤도가 닫힌 곡선이다.

## 자유도 1

**정리.** $2$ 차원 심플렉틱 다양체 위의 모든 Hamilton 계는 적분가능하다.

$n=1$ 이고 $F\_1=H$ 가 $dH\ne0$ 인 곳에서 독립성을 만족하며 대합성은 $\lbrace H,H\rbrace=0$ 으로 자동이다. 직관 절의 적분 공식이 이 경우의 작용-각 좌표를 계산한 것이고, 작용 변수는 준위곡선이 둘러싼 넓이를 $2\pi$ 로 나눈 값이다. ∎

# 활용

- [Hamilton 역학](hamiltonian-mechanics.md)의 정준방정식을 푸는 거의 유일한 체계적 방법이다. 작용-각 좌표에서 $H$ 가 $I$ 만의 함수이므로 $n$ 개의 각이 각자 등속으로 돌고, 초기조건을 넣는 것으로 해가 끝난다.
- [모멘트 사상](moment-map.md)의 정의에서 $G=\mathbb T^n$ 인 경우가 적분가능계다. 대합성은 $\mathbb T^n$ 이 가환이라는 조건에 대응하고, 올이 Lagrangian 이라는 성질이 모멘트 사상의 상을 볼록 다면체로 만드는 출발 조건이다.
- [측지선](geodesics.md)의 흐름이 적분가능한 계량이 있다. 회전면과 삼축 타원체의 측지선 흐름에서는 에너지 말고 보존량이 하나 더 있고, 그 올 위에서 측지선이 준주기 운동을 한다.
- 강체의 자유회전은 각운동량의 크기와 에너지를 보존량으로 갖는 적분가능계다. 올이 2차원 원환면이고 회전축이 그 위에서 준주기로 움직인다.
- 적분가능계에 작은 교란을 준 계에서 [Kolmogorov–Arnold–Moser 정리](kam-theorem.md)가 진동수의 정수관계가 약한 원환면들이 살아남는다고 말한다.[^1]

[^1]: V. I. Arnold, *Mathematical Methods of Classical Mechanics*, 2판, Springer Graduate Texts in Mathematics 60 (1989), 10 장과 부록 8. Arnold–Liouville 정리의 증명, 작용-각 좌표의 구성, 교란에서 원환면이 살아남는 조건이 여기 있다.

# 연관 문서

## 선수지식

- [Hamilton 역학](hamiltonian-mechanics.md)

## 더 알아보기

- [Lax 쌍](lax-pairs.md)
- [Kolmogorov-Arnold-Moser 정리](kam-theorem.md)

#differential_geometry #analysis #topology
