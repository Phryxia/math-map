# Lagrangian 부분다양체

# 개요

**Lagrangian 부분다양체(Lagrangian submanifold)** 는 위치와 운동량을 함께 좌표로 하는 공간 안에서, 보존량이 모두 일정한 점들이 이루는 곡면을 본뜬 부분다양체다. 공의 위치 $q$ 와 운동량 $p$ 를 좌표로 하는 평면에서 용수철에 매단 공의 에너지가 일정한 점들은 원 $q^2+p^2=1$ 을 이루고, 공의 운동은 이 원을 따라 돈다. 자유도가 둘이면 공간은 4 차원이고, 보존량 두 개가 모두 일정한 점들은 2 차원 곡면을 이루며 그 위에서 넓이를 재는 형식 $dq_1\wedge dp_1+dq_2\wedge dp_2$ 가 $0$ 이다. Lagrangian 부분다양체는 이 형식이 $0$ 인 가장 큰 차원의 부분다양체로 정의되고, 보존량의 준위집합과 좌표 변환을 같은 대상으로 다룬다.

# 직관

평면의 좌표 $(q,p)$ 를 다른 좌표 $(Q,P)$ 로 바꾸면서 $dQ\wedge dP=dq\wedge dp$ 를 지키려 한다. $Q=Q(q,p)$ 와 $P=P(q,p)$ 를 미지함수로 두면 조건은 Jacobi 행렬식이 $1$ 이라는 식 하나지만, 두 함수가 그 식에 함께 들어가므로 하나를 정해도 다른 하나가 편미분방정식으로 남는다.

함수 하나로 줄이는 방법이 있다. $S(q,Q)$ 를 아무 매끄러운 함수로 잡고

$$
p=\frac{\partial S}{\partial q},\qquad P=-\frac{\partial S}{\partial Q}
$$

로 $p$ 와 $P$ 를 정한다. 그러면 $p\thinspace dq-P\thinspace dQ=dS$ 이고, 양변에 외미분을 취하면 $dp\wedge dq-dP\wedge dQ=0$ 이므로 조건이 자동으로 성립한다. 아무 $S$ 하나가 좌표 바꾸기 하나를 준다.

이 계산이 쓴 것은 네 변수 공간 $\lbrace(q,p,Q,P)\rbrace$ 에 2형식 $dq\wedge dp-dQ\wedge dP$ 를 주고, 바꾸기의 그래프 위에서 그 형식이 소멸한다는 것뿐이다. 그래프는 2차원이고 전체는 4차원이다.

2형식이 소멸하는 부분다양체 가운데 차원이 전체의 절반인 것을 Lagrangian 부분다양체라 하고, 좌표 바꾸기의 그래프가 그중 하나다.

# 정의

Lagrangian 부분다양체는 심플렉틱 형식이 소멸하는 절반 차원의 부분다양체다. $2n$ 차원 [심플렉틱 다양체](symplectic-manifolds.md) $(M,\omega)$ 의 부분다양체 $L$ 과 포함사상 $\iota\colon L\to M$ 에 대해

$$
\iota^\ast\omega=0,\qquad \dim L=n
$$

이면 $L$ 을 **Lagrangian 부분다양체(Lagrangian submanifold)** 라 한다.

직관 절의 네 변수 공간 $\mathbb R^4$ 에 $\omega=dq\wedge dp-dQ\wedge dP$ 를 주면, 생성함수 $S(q,Q)$ 가 정하는 집합 $\lbrace(q,\partial\_qS,Q,-\partial\_QS)\rbrace$ 는 $(q,Q)$ 로 매개화되는 2차원 부분다양체이고 그 위에서 $\omega$ 가 소멸하므로 Lagrangian 이다. 같은 공간에서 평면 $\lbrace Q=P=0\rbrace$ 위에서는 $\omega=dq\wedge dp\ne 0$ 이므로 이 평면은 Lagrangian 이 아니다.

심플렉틱 벡터공간 $(V,\omega)$ 의 부분공간 $W$ 가 모든 $w,w'\in W$ 에서 $\omega(w,w')=0$ 을 만족하면 $W$ 를 **등방 부분공간(isotropic subspace)** 이라 하고, 등방이면서 $\dim W=\tfrac12\dim V$ 이면 **Lagrangian 부분공간(Lagrangian subspace)** 이라 한다. $\mathbb R^4$ 에 $\omega=dq\_1\wedge dp\_1+dq\_2\wedge dp\_2$ 를 주면 $\partial\_{q\_1}$ 하나가 생성하는 직선은 등방이고, $\partial\_{q\_1},\partial\_{q\_2}$ 가 생성하는 평면은 Lagrangian 이며, $\partial\_{q\_1},\partial\_{p\_1}$ 이 생성하는 평면은 $\omega(\partial\_{q\_1},\partial\_{p\_1})=1$ 이므로 등방이 아니다.

$W$ 의 **심플렉틱 여공간(symplectic complement)** $W^\omega$ 는 $W$ 의 모든 벡터 $w$ 에 대해 $\omega(v,w)=0$ 인 벡터 $v$ 전체다. 위 $\mathbb R^4$ 에서 $W$ 가 $\partial\_{q\_1}$ 이 생성하는 직선이면 $\omega(v,\partial\_{q\_1})=-dp\_1(v)$ 이므로 $W^\omega$ 는 $\partial\_{q\_1},\partial\_{q\_2},\partial\_{p\_2}$ 가 생성하는 3차원 부분공간이다.

# 성질

## 접공간과 심플렉틱 여공간에 의한 판정

$\iota^\ast\omega$ 의 점 $x$ 에서의 값은 $\omega$ 를 $T\_xL$ 로 제한한 것이다. 따라서 부분다양체 $L$ 이 Lagrangian 인 것은 각 점 $x$ 에서 접공간 $T\_xL$ 이 $T\_xM$ 의 Lagrangian 부분공간인 것과 동치다.

부분공간 $W$ 가 등방인 것은 $W\subset W^\omega$ 와 동치이고, Lagrangian 인 것은 $W=W^\omega$ 와 동치다. 앞의 것은 정의를 다시 쓴 것이고, 뒤의 것은 아래 차원 공식 $\dim W^\omega=2n-\dim W$ 에서 나온다.

## 차원 상한

$\dim V=2n$ 인 심플렉틱 벡터공간의 등방 부분공간 $W$ 는 $\dim W\le n$ 이다.

비퇴화성으로 $v\mapsto\omega(v,\cdot)$ 가 $V$ 와 $V^\ast$ 의 동형이므로, 이것을 $W$ 로 제한하는 사상 $V\to W^\ast$ 는 전사이고 핵이 $W^\omega$ 다. 따라서 $\dim W^\omega=2n-\dim W$ 다. 등방이면 $W\subset W^\omega$ 이므로 $\dim W\le 2n-\dim W$ 다.

## 1형식 그래프의 판정

다양체 $N$ 의 1형식 $\alpha$ 를 사상 $\alpha\colon N\to T^\ast N$ 으로 보면, 그 상 $\Gamma\_\alpha$ 가 Lagrangian 인 것은 $d\alpha=0$ 인 것과 같다.

[여접다발](cotangent-bundle.md)의 표준 1형식 $\lambda$ 는 $\alpha^\ast\lambda=\alpha$ 를 만족한다. 표준 심플렉틱 형식이 $\omega=-d\lambda$ 이므로 $\alpha^\ast\omega=-d(\alpha^\ast\lambda)=-d\alpha$ 다. 차원은 $\dim N=n$ 으로 맞으므로 소멸 조건이 $d\alpha=0$ 이다.

$\alpha=df$ 인 경우가 닫힌 1형식의 가장 흔한 예이고, 그 그래프가 직관 절의 생성함수에 대응한다. 영단면은 $\alpha=0$ 인 경우다.

## 심플렉틱 사상의 그래프

미분동형 $\varphi\colon(M\_1,\omega\_1)\to(M\_2,\omega\_2)$ 가 $\varphi^\ast\omega\_2=\omega\_1$ 을 만족하는 것은, 그래프 $\Gamma\_\varphi=\lbrace(x,\varphi(x))\rbrace$ 가 곱다양체 $M\_1\times M\_2$ 의 형식 $\omega\_1\oplus(-\omega\_2)$ 에 대해 Lagrangian 인 것과 같다.

사상 $\iota(x)=(x,\varphi(x))$ 의 당김은 $\iota^\ast\lbrack\omega\_1\oplus(-\omega\_2)\rbrack=\omega\_1-\varphi^\ast\omega\_2$ 다. 이것이 $0$ 인 것이 조건과 같고, 차원은 $\dim M\_1=\tfrac12\dim(M\_1\times M\_2)$ 로 맞는다.

$\varphi$ 가 미분동형이 아닌 Lagrangian 부분다양체도 같은 자리에 놓이므로, 사상이 아닌 대응까지 한 틀에서 다룰 수 있다.

## Weinstein 근방 정리

콤팩트 Lagrangian 부분다양체 $L\subset(M,\omega)$ 에는 근방 $U$ 와 영단면의 근방 $V\subset T^\ast L$ 이 있어, $L$ 을 영단면으로 보내는 심플렉틱 미분동형 $U\to V$ 가 존재한다. 이것이 Weinstein 근방 정리(Weinstein neighborhood theorem)다.[^1]

증명의 요지는 둘이다. 먼저 $L$ 의 심플렉틱 법다발이 $T^\ast L$ 과 동형임을 선형대수로 얻는다. $T\_xL$ 이 Lagrangian 이므로 $\omega$ 가 $T\_xM/T\_xL$ 과 $(T\_xL)^\ast$ 를 동형으로 잇는다. 그 다음 두 심플렉틱 형식이 $L$ 위에서 일치하는 상황에 Moser 논법(Moser's trick)을 적용해 근방을 맞춘다.

따라서 Lagrangian 의 근방에는 국소 불변량이 없고, $L$ 의 미분위상만으로 근방의 심플렉틱 구조가 정해진다. 같은 결론이 점 하나의 근방에서 성립한다는 것이 Darboux 정리(Darboux theorem)다.

# 활용

- 심플렉틱 다양체의 Darboux 정리가 주는 국소 표준형에서 Lagrangian 은 $\lbrace p=0\rbrace$ 으로 적힌다. Weinstein 근방 정리는 콤팩트 Lagrangian 의 근방을 여접다발의 영단면 근방으로 적는다.
- 여접다발의 성질 절이 드는 정준변환을 생성함수로 만드는 방법이 심플렉틱 사상의 그래프 판정이다. 생성함수 $S$ 의 그래프가 Lagrangian 이고, 그 Lagrangian 이 사상의 그래프이면 그 사상이 정준변환이다.
- [적분가능계](integrable-systems.md)의 보존량 사상 $F$ 의 올이 Lagrangian 이다. Arnold–Liouville 정리(Arnold–Liouville theorem)의 작용 변수는 그 올 위의 사이클에서 표준 1형식을 적분한 값이고, 적분이 사이클의 호모토피류에만 의존하는 것이 올의 Lagrangian 성질에서 나온다.
- $2n$ 차원 콤팩트 심플렉틱 다양체에 $n$ 차원 원환면이 효과적으로 작용할 때 [모멘트 사상](moment-map.md)의 상은 볼록 다면체이고, 다면체 내부 점의 올은 Lagrangian 원환면이다.
- [Hamilton 역학](hamiltonian-mechanics.md)의 정준방정식을 좌표 바꾸기로 단순화할 때, 바꾸기를 직접 찾는 대신 생성함수 하나를 찾는다. [Hamilton–Jacobi 방정식](hamilton-jacobi-equation.md)이 그 생성함수를 정하는 방정식이다.

[^1]: Dusa McDuff, Dietmar Salamon, *Introduction to Symplectic Topology*, 3판, Oxford University Press, 2017, 3 장과 4 장. 등방 부분공간의 선형대수, Moser 논법, Weinstein 근방 정리가 여기 있다.

# 연관 문서

## 선수지식

- [심플렉틱 다양체](symplectic-manifolds.md)
- [여접다발](cotangent-bundle.md)

## 더 알아보기

- [Hamilton–Jacobi 방정식](hamilton-jacobi-equation.md)

#differential_geometry #topology #analysis
