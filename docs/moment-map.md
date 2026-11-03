# 모멘트 사상

# 개요

**모멘트 사상(moment map)** 은 심플렉틱 다양체에 작용하는 Lie 군의 보존량을 한 사상으로 모은 것이다. 평면에서 중심력을 받는 질점은 위치와 운동량으로 상태가 $4$ 차원이지만, 회전 대칭 때문에 각운동량이 일정하고 회전으로 옮겨지는 상태끼리는 같은 운동이어서 실제로는 반지름과 그 변화율 둘로 운동이 정해진다. 모멘트 사상은 대칭에서 나오는 보존량을 모으고, 보존량을 고정한 집합을 대칭으로 나누어 자유도가 줄어든 심플렉틱 다양체를 얻는다.

# 직관

평면에서 중심력을 받는 질점의 운동을 본다. 위치 $q=(q\_1,q\_2)$ 와 운동량 $p=(p\_1,p\_2)$ 가 상태이고 Hamilton 함수는 $H=\tfrac12\Vert p\Vert^2+V(\Vert q\Vert)$ 다. 상태 공간이 $4$ 차원이므로 운동방정식은 네 개의 1 차 방정식이다.

$H$ 가 $\Vert q\Vert$ 에만 의존하므로 좌표계를 회전시켜도 $H$ 가 같다. 이 대칭으로 방정식의 개수를 줄이려면 회전으로 변하지 않는 양을 찾아야 한다. 각운동량 $\mu=q\_1p\_2-q\_2p\_1$ 을 시간으로 미분하면 운동방정식을 대입해 $0$ 이 나오므로 $\mu$ 는 운동 내내 일정하다.

$\mu$ 가 상수 $c$ 로 고정되면 상태가 $4$ 차원 공간 안의 $3$ 차원 집합에 갇힌다. 이 집합의 점들은 회전으로 서로 옮겨지는 것끼리 같은 운동을 나타내므로 한 점으로 보아도 된다. 회전군이 $1$ 차원이니 남는 것은 $2$ 차원이고, 실제로 반지름과 반지름의 변화율 두 개로 운동이 결정된다.

줄어든 $2$ 차원 공간도 심플렉틱 다양체이고, 그 위의 Hamilton 함수는 원래 $H$ 에 각운동량을 $c$ 로 넣은 유효 함수다. 보존량 $\mu$ 를 회전군의 생성원에 대응하는 함수로 본 것이 모멘트 사상이고, 그 역상을 군으로 나누어 차원을 줄이는 것이 심플렉틱 축소다.

# 정의

모멘트 사상은 심플렉틱 작용의 보존량을 [Lie 대수](lie-algebras.md)의 쌍대공간 값으로 모은 사상이다. $(M,\omega)$ 가 [심플렉틱 다양체](symplectic-manifolds.md)이고 [Lie 군](lie-groups.md) $G$ 가 $\omega$ 를 보존하며 작용하며, $\mathfrak g$ 가 $G$ 의 Lie 대수라 한다. $\xi\in\mathfrak g$ 마다 작용이 주는 벡터장을 $X\_\xi$ 라 쓴다.

사상 $\mu:M\to\mathfrak g^\ast$ 가 모든 $\xi\in\mathfrak g$ 에서

$$d\langle\mu,\xi\rangle=\omega(X\_\xi,\cdot)$$

를 만족하면 $\mu$ 를 **모멘트 사상** 이라 한다. 좌변은 함수 $\langle\mu,\xi\rangle:M\to\mathbb R$ 의 미분이고, 조건은 이 함수가 $X\_\xi$ 의 Hamilton 함수라는 것이다.

## 등변성

$\mu$ 가 추가로

$$\mu(g\cdot x)=\mathrm{Ad}^\ast\_g\thinspace\mu(x)$$

를 만족하면 **등변 모멘트 사상(equivariant moment map)** 이라 한다. $\mathrm{Ad}^\ast$ 는 딸림표현의 쌍대(coadjoint representation)다. $G=\mathrm{SO}(2)$ 는 가환이라 $\mathrm{Ad}^\ast$ 가 항등이고, 직관 절의 각운동량은 좌표를 돌려도 값이 같으므로 등변 모멘트 사상이다.

## 예

$M=\mathbb R^4$ 에 표준 심플렉틱 형식 $\omega=dq\_1\wedge dp\_1+dq\_2\wedge dp\_2$ 를 주고 $G=\mathrm{SO}(2)$ 가 $q$ 와 $p$ 를 함께 회전시키면, 회전의 벡터장은 $X=(-q\_2,q\_1,-p\_2,p\_1)$ 이고 $\omega(X,\cdot)=p\_2\thinspace dq\_1+q\_1\thinspace dp\_2-p\_1\thinspace dq\_2-q\_2\thinspace dp\_1=d(q\_1p\_2-q\_2p\_1)$ 이다. 모멘트 사상은 직관 절의 각운동량이다. $G$ 가 평행이동군이면 모멘트 사상은 운동량 $p$ 다. $G=T^n$ 이 $\mathbb C^n$ 에 좌표마다 위상으로 작용하면 모멘트 사상은 $(\vert z\_1\vert^2,\dots,\vert z\_n\vert^2)$ 의 상수배다.

# 성질

## 존재와 등변성

$G$ 가 콤팩트이고 모멘트 사상이 존재하면, $G$ 위에서 평균을 내어 등변인 것으로 고칠 수 있다. $G$ 가 반단순이면 심플렉틱 작용마다 등변 모멘트 사상이 존재하고 유일하다. 축소를 정의하는 자리에서는 등변성을 가정한다.

## 보존량

$H$ 가 $G$ 의 작용으로 불변이면 $\mu$ 의 각 성분이 $H$ 의 Hamilton 흐름을 따라 일정하다. $\xi$ 에 대응하는 성분의 흐름 방향 미분이 $\omega(X\_\xi,X\_H)$ 이고, $H$ 의 불변성이 이 값을 $0$ 으로 만든다. [Noether 정리](noether-theorem.md)가 이 진술이다.

## Marsden–Weinstein 축소

$0$ 이 $\mu$ 의 정칙값이고 $G$ 가 $\mu^{-1}(0)$ 에 자유롭고(free) 고유하게(proper) 작용하면, 몫 $M\_0=\mu^{-1}(0)/G$ 가 매끄러운 다양체이고 그 위에 $\omega$ 에서 유도된 심플렉틱 형식이 하나 있다.[^1] 차원은

$$\dim M\_0=\dim M-2\dim G$$

다.

증명의 요지. $\mu$ 가 $0$ 에서 정칙이므로 $\mu^{-1}(0)$ 은 여차원 $\dim G$ 의 부분다양체다. 모멘트 사상의 정의에서 $T\_x\mu^{-1}(0)$ 이 궤도의 접공간 $T\_x(G\cdot x)$ 의 $\omega$-직교여공간과 같고, 궤도의 접공간이 그 안에 들어 있으므로 $\omega$ 를 $\mu^{-1}(0)$ 으로 제한한 것의 핵이 정확히 궤도 방향이다. 몫으로 내리면 핵이 사라져 비퇴화가 된다.

$c$ 가 $0$ 이 아닌 값이면 $\mathrm{Ad}^\ast$ 작용에서 $c$ 의 안정자 부분군 $G\_c$ 로 나누어 $\mu^{-1}(c)/G\_c$ 를 쓴다. 직관 절의 중심력 문제에서 $G\_c=\mathrm{SO}(2)$ 이고, $c\ne0$ 이면 $\mu^{-1}(c)$ 에서 회전이 자유로우므로 축소 공간의 차원은 $4-2=2$ 다.

## 상의 볼록성

$G$ 가 콤팩트 연결 가환군 $T^n$ 이고 $M$ 이 콤팩트 연결이면 $\mu(M)$ 이 볼록 다면체이고, $\mu(M)$ 은 작용의 고정점에서의 $\mu$ 값들의 볼록 껍질이다.[^2] 이것이 Atiyah–Guillemin–Sternberg 볼록성 정리(convexity theorem)다. 단위구면 $S^2$ 에 $z$ 축 둘레의 회전이 작용하면 모멘트 사상은 높이 $z$ 이고, 고정점은 두 극이며, 상은 구간 $\lbrack -1,1\rbrack$ 이다.

# 활용

- 강체와 중심력 운동: 각운동량을 고정하고 회전을 나누어 자유도를 줄이는 고전적 축소가 모멘트 사상의 역상을 몫으로 보내는 것이다.
- [토릭 다양체](toric-varieties.md): $T^n$ 작용의 모멘트 다면체가 다양체를 결정하므로 볼록 기하의 자료로 대수기하의 대상을 다룬다.
- 게이지 이론: 닫힌 곡면 위 주다발의 접속 공간에 게이지 군이 작용할 때 곡률이 모멘트 사상이고, 그 영집합의 몫이 평탄 접속의 모듈라이 공간이다(Atiyah–Bott).
- 기하적 불변량 이론(geometric invariant theory): 사영 다양체에 복소 환원군이 작용할 때 그 콤팩트 부분군의 모멘트 사상 영집합의 몫이 대수적 몫과 같다는 Kempf–Ness 정리(Kempf–Ness theorem)를 쓴다.

[^1]: Marsden, Weinstein, *Reduction of symplectic manifolds with symmetry*, Reports on Mathematical Physics 5 (1974), 121–130.
[^2]: Atiyah, *Convexity and commuting Hamiltonians*, Bulletin of the London Mathematical Society 14 (1982), 1–15. Guillemin 과 Sternberg 가 같은 해에 독립적으로 증명했다.

# 연관 문서

## 선수지식

- [심플렉틱 다양체](symplectic-manifolds.md)
- [Lie 군](lie-groups.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #group_theory #topology
