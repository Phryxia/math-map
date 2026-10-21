# Jordan 곡선 정리

# 개요

**Jordan 곡선 정리(Jordan curve theorem)** 는 평면 위의 스스로 만나지 않는 닫힌 곡선이 평면을 정확히 두 조각으로 나눈다는 정리다. 한 조각은 유계이고 다른 조각은 유계가 아니며, 곡선은 두 조각 모두의 경계다. 곡선이 매끄럽지 않고 연속이기만 해도 성립하며, 그 경우의 증명에는 [Mayer–Vietoris 완전열](mayer-vietoris.md)로 곡선 바깥의 호몰로지를 계산하는 방법을 쓴다.

# 직관

곡선이 다각형이면 안팎을 직접 가를 수 있다. 다각형 밖의 점에서 한 방향으로 반직선을 긋고 다각형의 변과 몇 번 만나는지 센다. 꼭짓점을 피하도록 방향을 고르면 교점은 유한 개다. 교점 수가 홀수인 점을 안쪽, 짝수인 점을 바깥쪽이라 하면, 점을 움직여 변을 한 번 건널 때마다 홀짝이 바뀌고 변을 건너지 않는 한 홀짝은 그대로다. 그래서 다각형 밖은 홀수 쪽과 짝수 쪽 두 조각으로 나뉜다.

곡선이 연속이기만 하면 이 셈이 성립하지 않는다. Koch 눈송이(Koch snowflake)처럼 어느 부분을 확대해도 꺾인 곳이 있는 곡선은 반직선과 무한히 많은 점에서 만날 수 있다. 교점을 셀 수 없으니 홀짝으로 조각을 가를 수 없다.

막힌 곳이 곡선의 모양이었으므로, 곡선을 보지 않고 곡선 바깥의 공간만 본다. 공간이 몇 조각인지는 그 공간의 0 차 [호몰로지](homology.md)의 계수가 센다. 곡선을 두 호로 자르고, 호 하나의 바깥은 한 조각이라는 것을 먼저 보인 뒤, 두 호의 바깥을 합치는 계산으로 곡선 바깥의 조각 수를 얻는다. 이 합치는 계산이 Mayer–Vietoris 완전열이다.

# 정의

**Jordan 곡선(Jordan curve)** 또는 **단순 닫힌 곡선(simple closed curve)** 은 원 $S^1$ 에서 평면 $\mathbb R^2$ 로 가는 단사 연속사상의 상이다. $S^1$ 이 콤팩트하므로 이 사상은 상 위로의 위상동형사상이고, Jordan 곡선은 원과 위상동형인 평면의 부분집합이다.

**Jordan 곡선 정리.** $C\subseteq\mathbb R^2$ 가 Jordan 곡선이면 $\mathbb R^2\setminus C$ 는 정확히 두 개의 [연결](connectedness.md) 성분을 갖는다. 그 가운데 하나는 유계이고 다른 하나는 유계가 아니며, $C$ 는 두 성분 각각의 경계다.[^1]

유계인 성분을 $C$ 의 **내부(interior)**, 유계가 아닌 성분을 **외부(exterior)** 라 한다.

# 성질

## 구면 안의 원판과 구면

증명은 평면에 무한원점을 붙인 구면 $S^2$ 에서 한다. 다음 두 명제를 $k$ 에 대한 귀납법으로 보인다. $\tilde H_i$ 는 축약 호몰로지(reduced homology)이고 $\tilde H_0(X)=0$ 은 $X$ 가 경로 연결이라는 것과 같다.[^1]

1. $h:D^k\to S^n$ 이 단사 연속이면 모든 $i$ 에서 $\tilde H_i(S^n\setminus h(D^k))=0$ 이다.
2. $h:S^k\to S^n$ 이 단사 연속이고 $k\lt n$ 이면 $\tilde H_{n-k-1}(S^n\setminus h(S^k))\cong\mathbb Z$ 이고 나머지 $i$ 에서 $\tilde H_i(S^n\setminus h(S^k))=0$ 이다.

명제 1 의 요지. $D^k$ 를 정육면체 $I^k$ 로 보고 마지막 좌표로 반씩 자른다. 두 반쪽의 상의 바깥을 $A$, $B$ 라 하면 $A\cap B$ 는 $I^k$ 의 상의 바깥이고 $A\cup B$ 는 가운데 단면 $I^{k-1}$ 의 상의 바깥이다. 귀납 가정으로 $A\cup B$ 의 축약 호몰로지가 $0$ 이므로 Mayer–Vietoris 완전열에서 $\tilde H_i(A\cap B)\cong\tilde H_i(A)\oplus\tilde H_i(B)$ 다. $0$ 이 아닌 원소가 있으면 둘 중 한 반쪽에서도 $0$ 이 아니고, 반으로 자르기를 되풀이하면 한 점으로 줄어드는 구간들이 나온다. 그 점의 단면 바깥에서는 원소가 $0$ 이고, 사슬은 콤팩트 집합 위에 있으므로 유한 단계에서 이미 $0$ 이 되어 모순이다.

명제 2 의 요지. $S^k$ 를 두 반구 $D^k_+$, $D^k_-$ 로 나누면 교집합은 적도 $S^{k-1}$ 이다. 두 반구의 상의 바깥 $A$, $B$ 는 명제 1 로 축약 호몰로지가 $0$ 이고, $A\cap B=S^n\setminus h(S^k)$, $A\cup B=S^n\setminus h(S^{k-1})$ 이다. Mayer–Vietoris 완전열로 $\tilde H_i(S^n\setminus h(S^k))\cong\tilde H_{i+1}(S^n\setminus h(S^{k-1}))$ 이 나오고, $k=0$ 에서 두 점을 뺀 $S^n$ 은 $S^{n-1}$ 과 호모토피 동치(homotopy equivalent)다.

$n=2$, $k=1$ 이면 $\tilde H_0(S^2\setminus C)\cong\mathbb Z$ 이므로 $S^2\setminus C$ 의 성분은 둘이다. 무한원점을 담은 성분이 평면에서 유계가 아닌 성분이다. 곡선에서 작은 호 하나를 빼면 명제 1 로 나머지의 바깥이 연결되므로, 두 성분을 잇는 경로는 그 호를 지나야 한다. 호를 아무리 작게 잡아도 그러하므로 $C$ 의 모든 점이 두 성분의 경계에 있다.

## Jordan–Brouwer 분리 정리

명제 2 를 $k=n-1$ 에 쓰면 $\tilde H_0(S^n\setminus h(S^{n-1}))\cong\mathbb Z$ 다. $\mathbb R^n$ 에 넣은 $(n-1)$ 차원 구면의 위상동형 상은 $\mathbb R^n$ 을 두 성분으로 나누고, 이것을 **Jordan–Brouwer 분리 정리(Jordan–Brouwer separation theorem)** 라 한다. 같은 명제에서 $i\ge 1$ 의 호몰로지가 $0$ 이므로 두 성분은 호몰로지로는 점과 구별되지 않는다.

## Schoenflies 정리

평면에서는 더 강한 결론이 성립한다. **Schoenflies 정리(Schoenflies theorem)** 는 Jordan 곡선의 내부와 곡선을 합친 집합이 닫힌 원판과 위상동형이라는 정리다. 평면 전체의 위상동형사상으로 Jordan 곡선을 원으로 옮길 수 있다는 것과 같다.[^2]

3 차원에서는 Schoenflies 정리의 대응 명제가 성립하지 않는다. Alexander 뿔 달린 구면(Alexander horned sphere)은 $S^2$ 와 위상동형인 $\mathbb R^3$ 의 부분집합인데, 외부의 [기본군](fundamental-group.md)이 자명하지 않으므로 외부는 닫힌 공의 바깥과 위상동형이 아니다.[^2]

# 활용

- [Riemann 사상정리](riemann-mapping-theorem.md): 경계가 Jordan 곡선인 영역에서는 Riemann 사상이 닫힌 영역에서 닫힌 원판으로 가는 위상동형으로 확장된다.
- [Poincaré–Bendixson 정리](poincare-bendixson.md): 해 곡선과 횡단선 조각으로 만든 닫힌 곡선이 평면을 둘로 나누므로, 해가 횡단선을 지나는 점들이 단조로 늘어선다.
- [평면 그래프](planar-graphs.md): 평면에 그린 그래프의 면을 그래프 바깥의 연결 성분으로 정의할 때, 순환 하나가 평면을 두 면으로 나눈다는 것이 Euler 공식의 귀납 증명의 첫 단계다.
- 복소해석의 감김수: Jordan 곡선을 한 번 따라 도는 닫힌 경로의 [감김수](winding-number.md)는 내부의 점에서 $\pm 1$ 이고 외부의 점에서 $0$ 이다. Cauchy 적분 공식을 Jordan 곡선 위에서 쓸 때 이 값을 쓴다.

[^1]: A. Hatcher, *Algebraic Topology*, Cambridge University Press, 2002, 2B 절 Proposition 2B.1 과 Corollary 2B.2.
[^2]: J. R. Munkres, *Topology*, 2nd ed., Prentice Hall, 2000, 63 절(Jordan 곡선 정리)과 64 절. Alexander 뿔 달린 구면은 J. W. Alexander, *An example of a simply connected surface bounding a region which is not simply connected*, Proceedings of the National Academy of Sciences **10** (1924), 8–10.

# 연관 문서

## 선수지식

- [연결성](connectedness.md)
- [Mayer–Vietoris 완전열](mayer-vietoris.md)

## 더 알아보기

아직 연결한 문서가 없다.

#topology #algebraic_topology #complex_analysis
