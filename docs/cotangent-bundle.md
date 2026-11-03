# 여접다발

# 개요

**여접다발(cotangent bundle)** 은 [다양체](manifolds.md)의 각 점에 그 점의 여접공간을 붙여 만든 [벡터다발](vector-bundles.md)이다. 고전역학에서 입자의 상태는 위치 $q$ 와 운동량 $p$ 의 쌍인데, 운동량은 속도와 달리 접공간 위의 선형함수처럼 좌표 변환을 따른다. 여접다발은 이 쌍 $(q,p)$ 전체의 공간이고, 그 위에는 좌표 없이 정의되는 1형식이 있어 그 외미분으로 [Hamilton 역학](hamiltonian-mechanics.md)의 심플렉틱 형식이 나온다.

# 직관

[접다발](tangent-bundle.md) $TN$ 위에는 좌표를 고르지 않고 적을 수 있는 1형식이 없다. 여접다발 $T^\ast N$ 위에는 있다.

$T^\ast N$ 의 점은 쌍 $(q,p)$ 이고, 여기서 $q\in N$ 이고 $p$ 는 접공간 $T\_qN$ 위의 선형함수다. 1형식을 적으려면 $T^\ast N$ 의 접벡터마다 수 하나를 정해야 한다. 점 $(q,p)$ 에서 접벡터 $v$ 를 하나 잡고, 사영 $\pi(q,p)=q$ 로 밀어 $T\_qN$ 의 벡터 $d\pi(v)$ 를 만든다. 그 점이 이미 가지고 있는 $p$ 를 그 벡터에 먹이면 수 $p(d\pi(v))$ 가 나온다.

$N$ 이 직선 $\mathbb R$ 이면 $T^\ast\mathbb R$ 은 평면이고, 점 $(q,p)=(1,3)$ 은 위치 $1$ 에서 $u\mapsto 3u$ 인 선형함수다. 이 점에서 접벡터 $v=(a,b)$ 를 $\pi$ 로 밀면 $q$ 방향 성분 $a$ 만 남고, 여기에 $p$ 를 먹이면 $3a$ 다. 좌표를 고르지 않고 접벡터에서 수가 나왔다.

$TN$ 에서는 같은 일이 되지 않는다. 점 $(q,u)$ 의 $u$ 는 벡터이고, $d\pi(v)$ 에 먹일 수 있는 선형함수가 아니다. 벡터를 수로 바꾸려면 계량 같은 추가 구조가 필요하다.

# 정의

## 여접다발

매끄러운 $n$ 차원 다양체 $N$ 에 대해 각 점의 여접공간 $T\_q^\ast N=(T\_qN)^\ast$ 를 모은 집합

$$
T^\ast N=\bigsqcup\_{q\in N}T\_q^\ast N
$$

이 **여접다발**이고, $\pi\colon T^\ast N\to N$ 이 사영이다. $N$ 의 좌표 $q^i$ 가 $dq^i$ 를 섬유의 기저로 주므로 $T^\ast N$ 은 $2n$ 차원 다양체이고 좌표는 $(q^i,p\_i)$ 다. 여기서 $p\_i$ 는 $\sum\_i p\_i\thinspace dq^i$ 의 계수다.

직관 절의 $T^\ast\mathbb R$ 은 좌표 $(q,p)$ 인 평면이다. 원 $S^1$ 의 여접다발은 각 점마다 직선이 붙은 원기둥 $S^1\times\mathbb R$ 이다.

## 표준 1형식

$T^\ast N$ 위의 **표준 1형식(tautological one-form)** $\lambda$ 는 점 $(q,p)$ 에서 접벡터 $v$ 에 다음을 대응시킨다.

$$
\lambda\_{(q,p)}(v)=p(d\pi(v))
$$

좌표로는 $\lambda=\sum\_i p\_i\thinspace dq^i$ 다. $T^\ast\mathbb R$ 에서는 $\lambda=p\thinspace dq$ 이고, 점 $(1,3)$ 의 접벡터 $(a,b)$ 에서 값이 직관 절의 $3a$ 다.

## 표준 심플렉틱 형식

**표준 심플렉틱 형식(canonical symplectic form)** 은 $\omega=-d\lambda$ 이고 좌표로 $\omega=\sum\_i dq^i\wedge dp\_i$ 다. $T^\ast\mathbb R$ 에서는 $\omega=dq\wedge dp$ 이고, 정사각형 $\lbrack 0,1\rbrack\times\lbrack 0,1\rbrack$ 위의 적분이 $1$ 이다.

## 정준변환

미분동형 $\varphi\colon T^\ast N\to T^\ast N$ 이 $\varphi^\ast\omega=\omega$ 를 만족하면 **정준변환(canonical transformation)** 이라 한다. $T^\ast\mathbb R$ 에서 $\varphi(q,p)=(p,-q)$ 는 $\varphi^\ast(dq\wedge dp)=dp\wedge(-dq)=dq\wedge dp$ 이므로 정준변환이다.

$N$ 의 미분동형 $f$ 의 **여접 올림(cotangent lift)** 은 $(q,p)\mapsto(f(q),p\circ(df\_q)^{-1})$ 이다. $f(q)=2q$ 의 여접 올림은 $(q,p)\mapsto(2q,p/2)$ 다.

# 성질

## 심플렉틱 구조

$\omega=-d\lambda$ 는 닫혀 있고 비퇴화하므로 $T^\ast N$ 은 [심플렉틱 다양체](symplectic-manifolds.md)다. 닫힘은 $d\omega=-dd\lambda=0$ 에서 나온다. 비퇴화성은 좌표 표현에서 보이고, $\omega$ 의 [행렬](matrices.md)이 $2n\times 2n$ 꼴 $\begin{pmatrix}0&I\cr -I&0\end{pmatrix}$ 이므로 가역이다.

$\omega$ 가 완전형식이므로 경계 없는 콤팩트 심플렉틱 다양체는 여접다발이 될 수 없다. 콤팩트하고 경계가 없으면 $\int\omega^n\ne 0$ 인데 완전형식의 거듭제곱은 완전이고 적분이 $0$ 이다.

Darboux 정리(Darboux theorem)에 따르면 모든 심플렉틱 다양체는 국소적으로 $T^\ast\mathbb R^n$ 과 심플렉틱 동형이다. 표준형 $\sum\_i dq^i\wedge dp\_i$ 가 그 국소 모형이다.

## Lagrangian 부분다양체

영단면(zero section) $\lbrace p=0\rbrace$ 과 각 섬유 $T\_q^\ast N$ 은 $n$ 차원이고 그 위에서 $\lambda$ 가 소멸하므로 $\omega$ 도 소멸한다. 둘 다 [Lagrangian 부분다양체](lagrangian-submanifolds.md)다. 더 일반적으로 1형식 $\alpha$ 의 그래프 $\lbrace(q,\alpha\_q)\rbrace$ 가 Lagrangian 인 것은 $d\alpha=0$ 과 같다.

## 정준변환과 표준 1형식

$\varphi^\ast\lambda-\lambda$ 가 닫힌 형식이면 $\varphi^\ast\omega=\omega$ 이므로 정준변환이다. $\varphi^\ast\lambda=\lambda$ 는 그보다 강한 조건이다. 정의 절의 $\varphi(q,p)=(p,-q)$ 는 $\varphi^\ast\lambda=-q\thinspace dp$ 이고 $\varphi^\ast\lambda-\lambda=-d(qp)$ 이므로 $\lambda$ 를 보존하지 않는 정준변환이다.

미분동형의 여접 올림은 $\lambda$ 를 보존한다. $f(q)=2q$ 의 올림에서 $\lambda$ 를 당기면 $(p/2)\thinspace d(2q)=p\thinspace dq$ 다.

## 측지선 흐름

$N$ 에 [Riemann 계량](riemannian-metrics.md)이 있으면 그것이 $TN$ 과 $T^\ast N$ 사이의 동형을 주고, 함수 $H(q,p)=\frac12\lvert p\rvert^2$ 가 정해진다. $H$ 의 Hamilton 흐름(Hamiltonian flow)의 궤적을 $\pi$ 로 내리면 [측지선](geodesics.md)이다. $T^\ast\mathbb R$ 에서 $H=p^2/2$ 이고 흐름은 $\dot q=p$, $\dot p=0$ 이므로 궤적이 등속 직선이다.

# 활용

- Hamilton 역학에서 위치 공간이 $N$ 인 계의 위상공간(phase space)이 $T^\ast N$ 이고, $p$ 가 운동량이다. Hamilton 함수의 흐름이 운동을 주고, 정준변환이 운동방정식의 꼴을 보존하는 좌표 변환이다.
- [미분형식](differential-forms.md)의 1형식은 $T^\ast N$ 의 단면이다. $k$ 형식은 $T^\ast N$ 의 [외대수](exterior-algebra.md) 다발(exterior algebra bundle)의 단면이다.
- Lagrangian 부분다양체 $L$ 의 근방은 $T^\ast L$ 의 영단면 근방과 심플렉틱 동형이다. 이것을 Weinstein 근방 정리(Weinstein neighborhood theorem)라 한다.

# 연관 문서

## 선수지식

- [접다발](tangent-bundle.md)
- [심플렉틱 다양체](symplectic-manifolds.md)

## 더 알아보기

- [Lagrangian 부분다양체](lagrangian-submanifolds.md)
- [Hamilton 역학](hamiltonian-mechanics.md)

#differential_geometry #topology #analysis
